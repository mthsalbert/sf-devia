// pages/api/chat/send.js
import OpenAI from 'openai';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { verifyAuth } from '../../../src/lib/verifyAuth';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\\\n/g, '\\n')))
  });
}

const db = getFirestore();

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const { threadId, input, assistantId } = req.body;

  if (!threadId || !input || !assistantId) {
    return res.status(400).json({ error: 'Parâmetros ausentes ou sessão inválida.' });
  }

  try {

    await openai.beta.threads.messages.create(threadId, {
      role: 'user',
      content: input
    });

    const run = await openai.beta.threads.runs.create(threadId, { assistant_id: assistantId });

    let status = run.status;
    let runResult = run;
    while (status !== 'completed' && status !== 'failed') {
      await new Promise((r) => setTimeout(r, 1000));
      runResult = await openai.beta.threads.runs.retrieve(threadId, run.id);
      status = runResult.status;
    }

    const usage = runResult.usage?.total_tokens || 0;
    const messages = await openai.beta.threads.messages.list(threadId);
    const lastMessage = messages.data.find(m => m.role === 'assistant');

    let reply = '';
    if (lastMessage?.content[0]?.type === 'text') {
      reply = lastMessage.content[0].text?.value || '';
    }

    // Atualiza billing do usuário
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const docRef = db
      .collection('users')
      .doc(uid)
      .collection('billings')
      .doc(`${year}-${month.toString().padStart(2, '0')}`);

    const tokenPrice = 0.10 / 1000;
    const value = +(usage * tokenPrice).toFixed(4);

    const snap = await docRef.get();
    if (snap.exists) {
      const data = snap.data();
      await docRef.update({
        totalTokens: data.totalTokens + usage,
        value: +(data.value + value).toFixed(4),
        updatedAt: new Date().toISOString()
      });
    } else {
      await docRef.set({
        year,
        month,
        totalTokens: usage,
        value,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error('Erro interno:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
