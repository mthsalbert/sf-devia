import ValidateRequest from '@/lib/validateRequest';
import { bucket, verifyAuth, db } from '@/lib/firebaseAdmin';
import JSZip from 'jszip';
import OpenAI from 'openai';
import { retrieveSourceFromOrg , getAllCustomFieldsFromOrg} from './retrieve';
import { connByOrgId } from '@/lib/salesforce';
import fs from 'fs';
import puppeteer from 'puppeteer';
import { marked } from 'marked';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

/**
 * Manipulador HTTP que gera, salva e retorna a documentação de metadados de uma organização Salesforce.
 * 
 * A documentação pode ser gerada com IA, salva em Markdown no Firebase Storage e opcionalmente empacotada em um arquivo ZIP
 * contendo as versões em `.md`, `.html` e `.pdf`.
 *
 * @async
 * @function handler
 * @param {import('next').NextApiRequest} req - Objeto de requisição HTTP.
 * @param {import('next').NextApiResponse} res - Objeto de resposta HTTP.
 * @returns {Promise<void>} - Retorna uma resposta JSON com informações da documentação gerada.
 *
 * @example
 * // POST /api/organization/document
 * // Body: { organizationId: 'abc123', ia: true, pack: true, upsert: false }
 *
 * Response:
 * {
 *   success: true,
 *   documentationName: 'orgs/abc123/documentation.md',
 *   documentationUrl: 'data:text/markdown;base64,...',
 *   zipBase64: 'UEsDB...'
 * }
 */
export default async function handler(req, res) {
  try {
    let {uid} = await verifyAuth(req);
    ValidateRequest.method(req, 'POST');
    const { organizationId, ia, pack, upsert } = JSON.parse(req.body);

    // Get organization reference and validate existence
    const orgRef = db.collection('users').doc(uid).collection('organizations').doc(organizationId);
    if (!(await orgRef.get()).exists) {
      return res.status(404).json({ error: 'Organização não encontrada' });
    }
    const { conn, org } = await connByOrgId({organizationId, uid});
    if (!org.zipContentName && !upsert) {
        return res.status(404).json({ error: 'Organização sem conteúdo para documentação, faça o retrieve do conteúdo antes.'});
    }
    let mdDocumentation
    const file = bucket.file(`orgs/${organizationId}/documentation.md`);
    if (upsert || !(await file.exists())) {
      mdDocumentation = (await retrieveDocumentation({conn, ia, file})).mdDocumentation;
    }
    else {
      const [buffer] = await file.download();
      mdDocumentation = Buffer.from(buffer, 'utf-8').toString('base64');
    }
    
    // Persist documentation in Firestore
    await orgRef.set({ 
      documentationName: file.name
    }, { merge: true });

    let zipBase64
    if (pack) {
      let {pdfContent, htmlContent} = await markdownToFiles(mdDocumentation)
      const zip = new JSZip();
      zip.file('documentation.md', Buffer.from(mdDocumentation, 'base64'));
      zip.file('documentation.pdf', Buffer.from(pdfContent, 'base64'));
      zip.file('documentation.html', Buffer.from(htmlContent, 'base64'));
      const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
      zipBase64 = zipBuffer.toString('base64')
    }

    return res.status(200).json({ 
      success: true, 
      documentationName: file.name,
      documentationUrl: `data:text/markdown;base64,${mdDocumentation}`,
      zipBase64
    });
  } catch (err) {
    console.error('Erro ao gerar documento para a organização:', err);
    return res.status(500).json({ error: err.toString() });
  }
}

export async function retrieveDocumentation({file, conn, ia}) {
  let mdDocumentation = await docByZipContent(
    (await retrieveSourceFromOrg(
      conn, 
      [
        ...[
          'ApexClass',
          'Flow',
          'ApexTrigger'
        ].map((xmlName) => ({
          name: xmlName,
          members: ['*'],
        })),
        ...(await getAllCustomFieldsFromOrg(conn))
      ]
    )).zipFile, 
    ia
  );
  await file.save(
    Buffer.from(mdDocumentation, 'base64'),
    {
      metadata: { contentType: 'text/markdown' },
      resumable: false,
    }
  );
  return {mdDocumentation};
}
/**
 * Processa um arquivo ZIP contendo metadados do Salesforce e gera uma documentação em Markdown,
 * com ou sem uso de IA (OpenAI), dependendo da flag `ia`.
 *
 * @async
 * @function docByZipContent
 * @param {string} zipBuffer - Buffer do arquivo ZIP codificado em base64.
 * @param {boolean} ia - Flag indicando se a documentação deve ser gerada com auxílio de IA (true) ou apenas exibindo o conteúdo bruto (false).
 * @returns {Promise<string>} - Retorna uma string base64 contendo o conteúdo Markdown gerado.
 *
 * @example
 * const markdownBase64 = await docByZipContent(base64Zip, true);
 */
async function docByZipContent(zipBuffer, ia) {
  const zip = await JSZip.loadAsync(Buffer.from(zipBuffer, 'base64'));
  // const zip = await JSZip.loadAsync(zipBuffer);
  const tree = {};

  // Monta a árvore de arquivos e pastas
  zip.forEach((relativePath, file) => {
    const parts = relativePath.split('/');
    let current = tree;

    parts.forEach((part, index) => {
      if (!part) return;
      if (!current[part]) {
        current[part] = {
          __meta__: {
            isFolder: index < parts.length - 1,
            path: parts.slice(0, index + 1).join('/'),
            fileRef: index === parts.length - 1 ? file : null,
          },
        };
      }
      current = current[part];
    });
  });

  // Coleta todos os arquivos válidos numa passada só
  const collectValidFiles = (node) => {
    const treeEntries = Object.entries(node);
    let collected = [];

    for (let [key, value] of treeEntries) {
      const isFolder = value.__meta__?.isFolder;
      if (isFolder && key !== '__meta__') {
        collected.push(...collectValidFiles(value));
      } else if (
        value?.__meta__?.fileRef &&
        (key.endsWith('.cls') || key.endsWith('.trigger') || key.endsWith('.flow') || key.endsWith('.object'))
      ) {
        collected.push({ key, file: value.__meta__.fileRef });
      }
    }

    return collected;
  };

  const validFiles = collectValidFiles(tree);

  // Agora invoca o GPT para todos os arquivos de uma vez
  let markdownResponsesMap = {}
  const markdownArrayHeader = []
  const markdownArrayContent = []
  const markdownResponses = await Promise.allSettled(
    validFiles.map(async ({ key, file }) => {
      const extension = key.split('.').at(-1);
      let extensionHeaderContent = `<strong>${extension}</strong>`
      if (!markdownArrayHeader.includes(extensionHeaderContent)) {
        markdownArrayHeader.push(extensionHeaderContent)
      }
      const fileContent = await file.async("string");
      if (!markdownResponsesMap[extension]) {
        markdownResponsesMap[extension] = [
          `## <strong id="${extension}">${extension}</strong>`
        ]
      }
      if (ia) {
        const resposta = await openai.chat.completions.create({
          model: "gpt-4.1-nano",
          messages: [
            {
              role: "system",
              content:
                gptContentByType[extension] ??
                "Documente este conteúdo em markdown. Este é um metadado do Salesforce.",
            },
            { role: "user", content: `nome de api do metadado: ${key} \n conteúdo do metadado: ${fileContent}` },
          ],
          temperature: 0.2,
        });
        markdownResponsesMap[extension].push(resposta.choices[0].message.content)
        markdownArrayContent.push(resposta.choices[0].message.content)
      }
      else {
        markdownArrayContent.push(`### ${key} \n \`\`\`${fileContent}\`\`\` `)
        markdownResponsesMap[extension].push(`### ${key} \n \`\`\`${fileContent}\`\`\` `)
      }

    })
  );

  markdownResponses.forEach((res, idx) => {
    if (res.status === 'rejected') {
      console.error(`Erro ao processar arquivo ${validFiles[idx].key}:`, res.reason);
    }
  });

  const markdownContent = [
    '<strong>Sumário</strong>', 
    ...[
      `<ul>${markdownArrayHeader.map(item => `<li>${item}</li>`).join('\n')}</ul>`
    ], 
    // ...markdownArrayContent,
    ...Object.keys(markdownResponsesMap).map(extension => {
      return markdownResponsesMap[extension].join('\n\n')
    })
  ].join('\n\n');
  const markdownBuffer = Buffer.from(markdownContent, 'utf-8');
  let markdownBufferBase64 = markdownBuffer.toString('base64');
  /* if (ia) {
    try {
      return await resumirMarkdownViaBase64(markdownBufferBase64)
    }
    catch (error) {
      return markdownBufferBase64
    }
  } */
  return markdownBufferBase64
}

/**
 * @development
 * Esta função está em desenvolvimento e pode sofrer alterações.
 */
async function resumirMarkdownViaBase64(base64Content) {
  // 1. Converter base64 para Buffer
  let response = await openai.responses.create({
      model: "gpt-4.1-nano",
      input: [
          {
              role: "user",
              content: [
                  {
                      type: "input_text",
                      text: `Por favor, gere um sumário com links para este markdown. Mantenha o resto do conteúdo do markdown organizado e bonito. Me retorne o base64 do arquivo apenas, sem nada mais. Depois vou programaticamente converter isso para download: ${base64Content}`,
                  },
              ],
          },
      ],
  });
  return response.output_text;
}

/**
 * Converte um arquivo Markdown (codificado em base64) em HTML estilizado e PDF.
 * 
 * O HTML é gerado com estilo customizado e um cabeçalho institucional. O PDF é gerado usando Puppeteer.
 * Ambos os arquivos são convertidos para base64 e retornados.
 *
 * @function markdownToFiles
 * @param {string} inputFile - Conteúdo do arquivo Markdown em base64.
 * @returns {Promise<{pdfContent: string, htmlContent: string}>} - Um objeto contendo o HTML e o PDF, ambos codificados em base64.
 *
 * @example
 * const { pdfContent, htmlContent } = await markdownToFiles(base64Markdown);
 */
function markdownToFiles(inputFile) {
    return new Promise((resolve, reject) => {
        // 1. Lê o conteúdo do arquivo Markdown
        const markdownContent = Buffer.from(inputFile, 'base64').toString('utf-8');

        // 2. Converte o Markdown para HTML
        const htmlContent = marked(markdownContent);

        // 3. Adiciona o estilo ao HTML
        const htmlWithStyle = `
      <html>
        <head>
            <link rel="stylesheet" href="https://stackedit.io/style.css" />
            <style>
                body {
                    padding: 0 10%;
                    width: 80%;
                }
            </style>
        </head>
        <body class="stackedit">
            <header>
                <img style="width: 100px;" src="https://cdn.prod.website-files.com/66e7c8fe04b2011c1c2459e6/67605631cc71d568f4d0c57e_Sales%20Cloud%20(6)%20(1).png"></img><br></br>
                <h1 style="margin-top: 0!important;">Documentação | Salesforce | Grupo Barigui</h1>
            </header>
            ${htmlContent}
        </body>
      </html>
    `;

      const tempDir = './temp';
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir, { recursive: true });
      }

        // 4. Salva o HTML com o estilo em um arquivo temporário
        const tempHtmlFile = './temp/temp.html'
        fs.writeFileSync(tempHtmlFile, htmlWithStyle);

        // 5. Usa Puppeteer para gerar o PDF
        const tempPdfFile = './temp/output.pdf'

        puppeteer.launch().then(async (browser) => {
            const page = await browser.newPage();
            await page.setContent(htmlWithStyle); // Usa o HTML com o estilo
            await page.pdf({ 
                path: tempPdfFile, 
                format: 'A4',
                displayHeaderFooter: true,
                footerTemplate: `
                    <div style="font-size:10px; width:100%; text-align:center; color:#888;">
                        Página <span class="pageNumber"></span> de <span class="totalPages"></span>
                    </div>
                `,
                headerTemplate: '<span></span>',
                margin: { top: '20mm', bottom: '20mm' }
            });

            // Lê o PDF gerado e converte para base64
            const pdfBuffer = fs.readFileSync(tempPdfFile);
            const pdfBase64 = pdfBuffer.toString('base64');

            // Exclui o arquivo temporário de HTML e PDF
            fs.unlinkSync(tempHtmlFile);
            fs.unlinkSync(tempPdfFile);

            // Retorna o PDF em base64
            const htmlBase64 = Buffer.from(htmlWithStyle, 'utf-8').toString('base64');
            resolve({
              pdfContent: pdfBase64,
              htmlContent: htmlBase64
            });

            await browser.close();
        }).catch((error) => {
            console.error('Erro ao gerar o PDF:', error);
            reject(error);
        });
    });
}

const gptContentByType = {
  cls:
    "Você é documentador de Apex. Quero somente um conteúdo markdown. Vou te enviar uma classe e você vai ler tudo, cada método e variável, e explicar de maneira técnica e leiga também, em formato markdown. NÃO É NECESSÁRIO COLOCAR O CÓDIGO. Siga o seguinte modelo: " +
    "Classe: MyClass\n\n" +
    "Descrição\n" +
    "A classe `MyClass` é responsável por realizar operações específicas relacionadas a alguma funcionalidade no Salesforce.\n\n" +
    "Métodos\n" +
    "`setNome(String novoNome)`\n" +
    "- Define o nome do objeto.\n" +
    "- Parâmetro: `novoNome` (String): novo nome.\n" +
    "- Retorno: Nenhum.\n\n" +
    "`getNome()`\n" +
    "- Retorna o nome atual.\n" +
    "- Retorno: `String`.\n\n" +
    "Variáveis\n" +
    "`nome`\n" +
    "- Tipo: `String`\n" +
    "- Descrição: Armazena o nome.\n\n" +
    "`idade`\n" +
    "- Tipo: `Integer`\n" +
    "- Descrição: Armazena a idade.",

  trigger:
    "Você é documentador de Apex.  Quero somente um conteúdo markdown. Vou te enviar um trigger e você vai explicá-lo detalhadamente, em formato markdown, de forma técnica e acessível.  NÃO É NECESSÁRIO COLOCAR O CÓDIGO. Siga o seguinte modelo:\n\n" +
    "Trigger: MyTrigger\n\n" +
    "Descrição\n" +
    "O trigger `MyTrigger` é responsável por interceptar eventos DML no objeto `Account`.\n\n" +
    "Eventos Monitorados\n" +
    "- before insert\n" +
    "- before update\n\n" +
    "Lógica\n" +
    "- Se o campo `Name` estiver vazio, define o valor como 'Padrão'.\n\n" +
    "Considerações\n" +
    "- Garante que o nome nunca fique em branco.\n" +
    "- Atua apenas antes do salvamento no banco de dados.",

  flow:
    "Você é documentador de Salesforce Flow.  Quero somente um conteúdo markdown. Vou te enviar o XML de um Flow exportado e você deve gerar uma explicação clara e completa em Markdown. Fale como se estivesse explicando para alguém técnico, mas também acessível. Siga este modelo:\n\n" +
    "Flow: MyFlow\n\n" +
    "Descrição\n" +
    "O Flow `MyFlow` é responsável por automatizar o processo de aprovação de oportunidades.\n\n" +
    "Tipo\n" +
    "- Autolaunched Flow (sem interface de usuário)\n\n" +
    "Objetivo\n" +
    "- Verificar condições de aprovação e atualizar o status da oportunidade.\n\n" +
    "Etapas Principais\n" +
    "1. Get Records – Consulta oportunidades com status `Em Análise`.\n" +
    "2. Decision – Verifica se o valor da oportunidade é maior que R$ 10.000.\n" +
    "3. Update Records – Se for maior, atualiza o status para `Aprovada`.\n\n" +
    "Variáveis\n" +
    "- varOpportunityId (Input) – ID da oportunidade recebida como parâmetro.\n" +
    "- varAprovado (Boolean) – Define se a oportunidade foi aprovada.\n\n" +
    "Considerações\n" +
    "- Este Flow deve ser chamado a partir de um botão personalizado ou Apex.\n" +
    "- É importante garantir que a variável de entrada seja passada corretamente.",
  object: 
    "Você é documentador de metadados do Salesforce.  Quero somente um conteúdo markdown. Vou te enviar o conteúdo de um arquivo `.object` e você vai gerar uma documentação clara e completa em Markdown, explicando os detalhes do objeto, os campos em formato de tabela e as regras de validação, se houver. As demais informações do objeto não são necessárias. A explicação deve ser técnica, mas também acessível.\n\n" +
    "Objeto: ${RÓTULO DO OBJETO AQUI}\n\n" +
    "Detalhes do Objeto\n" +
    "- Rótulo: Meu Objeto\n" +
    "- API Name: `NOME DE API DO OBJETO`\n" +
    "- Descrição: A descrição deve seguir a descrição do objeto se disponível, se não siga os campos ou .\n" +
    "- Tipo: Objeto Customizado\n\n" +
    "Campos\n" +
    "| Nome do Campo | Rótulo | Tipo | Obrigatório |\n" +
    "|---------------|--------|------|-------------|\n" +
    "| Nome__c       | Nome   | Texto | Sim         |\n" +
    "| Valor__c      | Valor  | Número | Não         |\n\n" +
    "Regras de Validação\n" +
    "`Valida_Nome_Obrigatorio`\n" +
    "- Condição: `ISBLANK(Nome__c)`\n" +
    "- Mensagem: O campo Nome é obrigatório.\n\n" +
    "`Valor_Positivo`\n" +
    "- Condição: `Valor__c < 0`\n" +
    "- Mensagem: O valor deve ser maior ou igual a zero.\n\n" +
    "Considerações\n" +
    "- Todos os campos devem seguir convenções de nomenclatura clara.\n" +
    "- Regras de validação ajudam a manter a integridade dos dados inseridos no objeto."
};
