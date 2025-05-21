// pages/api/chat/thread/delete.js
import { getFirestore, getDoc, deleteDoc } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import OpenAI from 'openai';
import { verifyAuth } from '../../../../src/lib/verifyAuth';

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\\\n/g, '\\n')))
  });
}

const db = getFirestore();
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);

  if (req.method !== 'DELETE') return res.status(405).json({ error: 'Método não permitido' });

  const { chatId } = req.query;

  if (!chatId) {
    return res.status(400).json({ error: 'Token ou parâmetro ausente.' });
  }

  try {

    const ref = db.collection('threads').doc(uid).collection('items').doc(chatId);
    const snap = await ref.get();
    if (!snap.exists) {
      return res.status(404).json({ error: 'Chat não encontrado' });
    }

    const { threadId } = snap.data();

    // Deleta a thread da OpenAI
    if (threadId && threadId.startsWith('thread')) {
      await openai.beta.threads.del(threadId);
    }

    // Deleta do Firestore
    await ref.delete();

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro ao deletar chat:', err);
    return res.status(500).json({ error: 'Erro interno ao deletar chat' });
  }
}
