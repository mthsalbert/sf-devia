// pages/api/chat/thread/create.js
import OpenAI from 'openai';
import { getFirestore, FieldValue } from 'firebase-admin/firestore';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { verifyAuth } from '../../../../src/lib/verifyAuth';
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

  try {
    const thread = await openai.beta.threads.create();

    const ref = db.collection('threads').doc(uid).collection('items');
    const docRef = await ref.add({
      threadId: thread.id,
      createdAt: FieldValue.serverTimestamp(),
      title: `Chat criado em ${new Date().toLocaleString()}`,
      userUid: uid
    });

    return res.status(200).json({ chatId: docRef.id });
  } catch (err) {
    console.error('Erro ao criar thread:', err);
    return res.status(500).json({ error: 'Erro interno ao criar thread' });
  }
}
