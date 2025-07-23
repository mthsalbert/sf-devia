import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '../../../src/lib/firebaseAdmin';

export default async function handler(req, res) {
  try {
    let {uid} = await verifyAuth(req);

    ValidateRequest.method(req, 'GET');

    return res.status(200).json({
        data: (await db.collection('users').doc(uid).collection('deploys').get())
            .docs
            .map(item => ({
                id: item.id,
                ...item.data()
            }))
    });
  } catch (err) {
    console.error('Erro ao listar deploys:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
