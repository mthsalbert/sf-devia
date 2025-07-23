const fs = require('fs');
const chardet = require('chardet');
const iconv = require('iconv-lite');

// Caminho do seu arquivo .md
const inputFilePath = 'documentation.md';
const outputFilePath = 'documentation_utf8.md';

// Detecta a codificação original
const buffer = fs.readFileSync(inputFilePath);
const encoding = chardet.detect(buffer) || 'windows-1252'; // fallback se não detectar

console.log(`Codificação detectada: ${encoding}`);

// Converte para UTF-8
const content = iconv.decode(buffer, encoding);
fs.writeFileSync(outputFilePath, content, { encoding: 'utf8' });

console.log('Arquivo convertido para UTF-8.');
