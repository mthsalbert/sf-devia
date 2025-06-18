import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);

  ValidateRequest.method(req, 'GET');

  try {
    const ref = await db
      .collection('users')
      .doc(uid)
      .collection('organizations')
      .doc(req.query.organizationId)
      .get();

    let data = ref.data();

    if (!ref.exists) {
      return res.status(200).json({ organization: null });
    }

    const { id, name, instance_url, zipContent } = data;

    return res.status(200).json({
      organization: {
        id,
        name,
        instance_url,
        zipContent
      },
    });
  } catch (err) {
    console.error('Erro ao obter as organizações:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
