// pages/api/chat/thread/update.js
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { verifyAuth } from '../../../../src/lib/firebaseAdmin';

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\\\n/g, '\\n')))
  });
}

const db = getFirestore();

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).json({ error: 'Método não permitido' });

  const { chatId, ...updates } = req.body;

  if (!chatId) {
    return res.status(400).json({ error: 'Token ou dados ausentes.' });
  }

  try {
    let {uid} = await verifyAuth(req);
    const ref = db.collection('threads').doc(uid).collection('items').doc(chatId);
    const snap = await ref.get();

    if (!snap.exists) {
      return res.status(404).json({ error: 'Chat não encontrado' });
    }

    await ref.set(updates, { merge: true });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro ao atualizar chat:', err);
    return res.status(500).json({ error: 'Erro interno ao atualizar' });
  }
}
