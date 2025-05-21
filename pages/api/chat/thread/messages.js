// pages/api/chat/thread/messages.js
import OpenAI from 'openai';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { verifyAuth } from '../../../../src/lib/verifyAuth';

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\\\n/g, '\\n')))
  });
}

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método não permitido' });

  const { threadId } = req.query;

  if (!threadId) {
    return res.status(400).json({ error: 'Parâmetros obrigatórios ausentes.' });
  }

  try {
    await verifyAuth(req);
    const response = await openai.beta.threads.messages.list(threadId);

    const formatted = await Promise.all(
      response.data
        .filter(m => m.role === 'user' || m.role === 'assistant')
        .map(async (m) => {
          const contentItem = m.content[0];
          if (contentItem.type === 'file_reference') {
            const fileId = contentItem.file_id;
            const file = await openai.files.retrieve(fileId);
            return {
              role: m.role,
              content: `Arquivo: ${file.filename}`,
              fileId
            };
          } else {
            return {
              role: m.role,
              content: contentItem.text?.value || ''
            };
          }
        })
    );

    return res.status(200).json({ messages: formatted.reverse() });
  } catch (err) {
    console.error('Erro ao listar mensagens:', err);
    return res.status(500).json({ error: 'Erro ao carregar mensagens do GPT' });
  }
}
