import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import { getOrganizations } from '../organization/list';

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);

  ValidateRequest.method(req, 'GET');

  try {
    let organizations = []
    let {deployId, describe} = req.query
    const ref = await db
      .collection('users')
      .doc(uid)
      .collection('deploys')
      .doc(deployId)
      .get();

    if (!ref.exists) {
      return res.status(200).json({ deploy: null });
    }

    if (describe) {
        organizations = await getOrganizations(uid)
    }

    return res.status(200).json({
      deploy: ref.data(),
      organizations
    });
  } catch (err) {
    console.error('Erro ao obter as organizações:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
