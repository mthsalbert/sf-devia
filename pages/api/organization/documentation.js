import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import JSZip from 'jszip';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {

  try {
    let {uid} = await verifyAuth(req);
    const { organizationId } = JSON.parse(req.body);

    // Get organization reference and validate existence
    const orgRef = db.collection('users').doc(uid).collection('organizations').doc(organizationId);
    if (!(await orgRef.get()).exists) {
      return res.status(404).json({ error: 'Organização não encontrada' });
    }
    let orgData = (await orgRef.get()).data();
    if (!orgData.zipContent) {
        return res.status(404).json({ error: 'Organização sem conteúdo para documentação, faça o retrieve do conteúdo antes.'});
    }
    let documentation = await docByZipContent(orgData.zipContent);
    
    // Persist documentation in Firestore
    await orgRef.set({ 
      documentation
    }, { merge: true });

    return res.status(200).json({ success: true, documentation });
  } catch (err) {
    console.error('Erro ao gerar token para a organização:', err);
    return res.status(500).json({ error: err.toString() });
  }
}


/**
 * Processes a base64-encoded ZIP buffer containing Apex classes/triggers, generates Markdown documentation
 * for each relevant file using OpenAI, and returns the documentation as a base64-encoded Markdown string.
 *
 * The function parses the ZIP file, builds a tree structure of its contents, and for each Apex file (excluding
 * files ending with `.cls-meta.xml`), it sends the file content to OpenAI's API to generate documentation
 * in Markdown format following a specific template. The resulting documentation for all files is concatenated
 * and returned as a base64-encoded string.
 *
 * @async
 * @param {string} zipBuffer - The base64-encoded ZIP file buffer containing Apex source files.
 * @returns {Promise<string>} A promise that resolves to a base64-encoded Markdown string with the generated documentation.
 */
async function docByZipContent(zipBuffer) {
    const zip = await JSZip.loadAsync(Buffer.from(zipBuffer, 'base64'));
    const tree = {};

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

    const renderTree = async (node, depth = 0) => {
      let treeEntries = Object.entries(node);
      let response = [];
      let fileToDocIndexes = [];
      for (let i = 0; i < treeEntries.length; i++) {
        const [key, value] = treeEntries[i];
        const isFolder = value.__meta__?.isFolder;
        if (isFolder && key === '__meta__') return null;
        if (isFolder) {
          let subResponse = await renderTree(value, depth + 1);
          if (!subResponse) continue;
            // Skip files ending with .cls-meta.xml
            if (key.endsWith('.cls-meta.xml')) {
            continue;
            }
            response.push(...subResponse);
          }
          else if (value?.__meta__?.fileRef && !key.endsWith('.cls-meta.xml')) {
            // Skip files ending with .cls-meta.xml
            fileToDocIndexes.push(i);
          }
      }
      await Promise.allSettled(fileToDocIndexes.map(async index => {
          let [key, value] = treeEntries[index]
          const resposta = await openai.chat.completions.create({
            model: "gpt-4", // ou "gpt-3.5-turbo"
            messages: [
              { 
                role: "system", 
                content: "Você é documentador de apex. Vou te enviar uma classe ou um trigger e você vai ler tudo, cada método e variável e explicar, de maneira técnica e leiga também. Em formato markdown. Siga o seguinte modelo: " +
                "# Documentação da Classe Apex MyClass" +

                "## Descrição" +
                "A classe \`MyClass` é responsável por realizar operações específicas relacionadas a alguma funcionalidade no Salesforce." +

                "## Implementação" +

                "`\`\`apex" +
                "public class MyClass {" +
                "     //Variáveis de instância" +
                "    private String nome;" +
                "    private Integer idade;" +

                "    // Construtor padrão" +
                "    public MyClass() {" +
                "        this.nome = '';" +
                "        this.idade = 0;" +
                "    }" +

                "    // Método para definir o nome" +
                "    public void setNome(String novoNome) {" +
                "        this.nome = novoNome;" +
                "    }" +

                "    // Método para obter o nome" +
                "    public String getNome() {" +
                "        return this.nome;" +
                "    }" +

                "    // Método para definir a idade" +
                "    public void setIdade(Integer novaIdade) {" +
                "        this.idade = novaIdade;" +
                "    }" +

                "    // Método para obter a idade" +
                "    public Integer getIdade() {" +
                "        return this.idade;" +
                "    }" +
                "}" +
                "\`\`\`" +

                "## Métodos" +

                "### \`setNome(String novoNome)\`" +
                "Método utilizado para definir o nome de um objeto \`MyClass\`." +

                "#### Parâmetros" +
                "- \`novoNome\` (String): Novo nome a ser atribuído." +

                "#### Retorno" +
                "- Nenhum." +

                "### \`getNome()\`" +
                "Método utilizado para obter o nome atual de um objeto \`MyClass\`." +

                "#### Parâmetros" +
                "- Nenhum." +

                "#### Retorno" +
                "- \`String\`: Nome atual do objeto." +

                "### \`setIdade(Integer novaIdade)\`" +
                "Método utilizado para definir a idade de um objeto \`MyClass\`." +

                "#### Parâmetros" +
                "- \`novaIdade\` (Integer): Nova idade a ser atribuída." +

                "#### Retorno" +
                "- Nenhum." +

                "### \`getIdade()\`" +
                "Método utilizado para obter a idade atual de um objeto \`MyClass\`." +

                "#### Parâmetros" +
                "- Nenhum." +

                "#### Retorno" +
                "- \`Integer\`: Idade atual do objeto." +

                "## Variáveis" +

                "### \`nome\`" +
                "- Tipo: \`String\`" +
                "- Descrição: Armazena o nome do objeto \`MyClass\`." +

                "### \`idade\`" +
                "- Tipo: \`Integer\`" +
                "- Descrição: Armazena a idade do objeto \`MyClass\`." +
                " "
              },
              { role: "user", content: (await value.__meta__.fileRef.async("string")) || '' }
            ],
            temperature: 0.2
          });
          response.push(resposta.choices[0].message.content);
      }))
      return response;
    }

    let markdownArrayContent = await renderTree(tree);

    const markdownContent = markdownArrayContent.join('\n\n');
    const markdownBuffer = Buffer.from(markdownContent, 'utf-8');
    const markdownBase64 = markdownBuffer.toString('base64');
    return markdownBase64;
}
