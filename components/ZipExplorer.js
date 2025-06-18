import React, { useState } from 'react';
import JSZip from 'jszip';

function ZipExplorer({ zipBuffer }) {
  const [tree, setTree] = useState(null);

  React.useEffect(() => {
    const load = async () => {
      const tree = await loadZipTree(Buffer.from(zipBuffer, 'base64'));
      setTree(tree);
    };
    if (zipBuffer) {
      load();
    }
  }, [zipBuffer]);

  const renderTree = (node, depth = 0) =>
    Object.entries(node).map(([key, value]) => {
      if (key === '__meta__') return null;
      const isFolder = value.__meta__.isFolder;

      if (!isFolder) {
        /* let explained = openai.chat.completions.create({
          model: "gpt-4",
          messages: [
            { role: "system", content: "Você vai documentar conteúdos do Apex. Leia a classe ou a trigger que eu enviar e me devolva um texto markdown. Quero explicação da classe, método ou variável e exemplo de implementação." },
            { role: "user", content: value }
          ],
          temperature: 0.7
        }) */
      }
      return (
        <div key={value.__meta__.path} style={{ paddingLeft: depth * 20 }}>
          {isFolder ? (
            <strong>📁 {key}</strong>
          ) : (
            <span>📄 {key}</span>
          )}
          {isFolder && renderTree(value, depth + 1)}
        </div>
      );
  });

  return (
    <div>
      <div>{tree && renderTree(tree)}</div>
    </div>
  );
}

  async function loadZipTree(buffer) {
    const zip = await JSZip.loadAsync(buffer);
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

    return tree;
  }

export default ZipExplorer;
