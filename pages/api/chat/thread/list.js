// pages/api/chat/thread/list.js
import { getFirestore, collection, getDocs } from 'firebase-admin/firestore';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import { verifyAuth } from '../../../../src/lib/verifyAuth';

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\\\n/g, '\\n')))
  });
}

const db = getFirestore();

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);

  if (req.method !== 'GET') return res.status(405).json({ error: 'Método não permitido' });

  try {
    const ref = db.collection('threads').doc(uid).collection('items');
    const snapshot = await ref.get();
    const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

    return res.status(200).json({ chats: data });
  } catch (err) {
    console.error('Erro ao listar chats:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
