// pages/api/user/[userId].js
import { verifyAuth } from '../../../src/lib/verifyAuth';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.applicationDefault(),
  });
}

export default async function handler(req, res) {
  const { userId } = req.query;

  await verifyAuth(req)

  try {

    const doc = await admin.firestore().collection('users').doc(userId).get();
    if (!doc.exists) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    return res.status(200).json(doc.data());
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao verificar token ou buscar dados' });
  }
}