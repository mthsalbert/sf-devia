import React, { useState, useEffect } from 'react';
import JSZip from 'jszip';

function ZipExplorer({ zipBuffer }) {
  const [tree, setTree] = useState(null);
  const [selectedFilePath, setSelectedFilePath] = useState(null);
  const [fileContent, setFileContent] = useState('');

  useEffect(() => {
    const load = async () => {
      const tree = await loadZipTree(Buffer.from(zipBuffer, 'base64'));
      setTree(tree);
    };
    if (zipBuffer) load();
  }, [zipBuffer]);

  const handleFileClick = async (meta) => {
    if (!meta.fileRef) return;
    const content = await meta.fileRef.async('text');
    setSelectedFilePath(meta.path);
    setFileContent(content);
  };

  const renderTree = (node, depth = 0) =>
    Object.entries(node).map(([key, value]) => {
      if (key === '__meta__') return null;
      const isFolder = value.__meta__.isFolder;
      const path = value.__meta__.path;

      return (
        <div
          key={path}
          style={{
            paddingLeft: depth * 20,
            cursor: !isFolder ? 'pointer' : 'default',
            fontWeight: path === selectedFilePath ? 'bold' : 'normal',
            backgroundColor: path === selectedFilePath ? '#e0f7ff' : 'transparent',
          }}
          onClick={() => !isFolder && handleFileClick(value.__meta__)}
        >
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
    <div style={{ display: 'flex', gap: '2rem' }}>
      <div>{tree && renderTree(tree)}</div>
      <div style={{ flex: 1, whiteSpace: 'pre-wrap', borderLeft: '1px solid #ccc', paddingLeft: '1rem' }}>
        {selectedFilePath ? (
          <>
            <h3>{selectedFilePath}</h3>
            <pre>{fileContent}</pre>
          </>
        ) : (
          <p>Selecione um arquivo para visualizar.</p>
        )}
      </div>
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
