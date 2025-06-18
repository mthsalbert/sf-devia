
import { db } from '../../../src/lib/firebase';
import { verifyAuth } from '../../../src/lib/firebaseAdmin';
import ValidateRequest from '@/lib/validateRequest';

export default async function handler(req, res) {

  try {
    let {uid} = await verifyAuth(req);
    
    ValidateRequest.method(req, 'POST');

    const orgData = req.body;

    if (!orgData.orgId) {
      return res.status(400).json({ error: 'Token ou dados ausentes.' });
    }
    const ref = doc(db, 'users', uid, 'organizations', orgData.orgId);
    const snap = await ref.get();

    if (!snap.exists) {
      return res.status(404).json({ error: 'Organização não encontrada' });
    }

    await ref.set(orgData, { merge: true });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro ao atualizar Organização:', err);
    return res.status(500).json({ error: 'Erro interno ao atualizar' });
  }
}
