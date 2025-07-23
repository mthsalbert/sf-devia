const fs = require('fs');
const puppeteer = require('puppeteer');
let marked

async function markdownToPdf(inputFile, outputFile) {
    await (async () => {
        const markedImport = await import('marked');
        marked = markedImport.marked
    })();

    return new Promise((resolve, reject) => {
        // 1. Lê o conteúdo do arquivo Markdown
        const markdownContent = fs.readFileSync(inputFile, 'utf8')

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
                <h1 style="margin-top: 0!important;">Documentação | Salesforce | Agrobay</h1>
            </header>
            ${htmlContent}
        </body>
      </html>
    `;

        // 4. Salva o HTML com o estilo em um arquivo temporário
        const tempHtmlFile = 'temp.html'
        fs.writeFileSync(tempHtmlFile, htmlWithStyle);

        // 5. Usa Puppeteer para gerar o PDF
        const tempPdfFile = 'output.pdf'

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
            fs.writeFileSync(`${outputFile}.html`, htmlWithStyle);
            fs.writeFileSync(`${outputFile}.pdf`, pdfBuffer);
            resolve(pdfBase64);

            await browser.close();
        }).catch((error) => {
            console.error('Erro ao gerar o PDF:', error);
            reject(error);
        });
    });
};

markdownToPdf("documentation.md", `documentation`)
