// pages/api/chat/thread/get.js
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
  let {uid} = await verifyAuth(req);
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método não permitido' });

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

    const data = snap.data();
    return res.status(200).json(data);
  } catch (err) {
    console.error('Erro ao buscar thread:', err);
    return res.status(500).json({ error: 'Erro interno ao buscar thread' });
  }
}
