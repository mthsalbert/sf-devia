import { verifyAuth, db } from '../../../src/lib/firebaseAdmin';
import ValidateRequest from '@/lib/validateRequest';

export default async function handler(req, res) {
  try {
    let {uid} = await verifyAuth(req);
    ValidateRequest.method(req, 'POST')
    const docRef = await db
      .collection('users')
      .doc(uid)
      .collection('organizations')
      .add({
        name: 'nova organização',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });

    return res.status(200).json({ organizationId: docRef.id });
  } catch (err) {
    console.error('Erro ao criar organização:', err);
    return res.status(500).json({ error: 'Erro interno ao criar organização' });
  }
}
