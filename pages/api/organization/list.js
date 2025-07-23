import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '../../../src/lib/firebaseAdmin';

export default async function handler(req, res) {
  try {
    let { uid } = await verifyAuth(req);

    ValidateRequest.method(req, 'GET');

    return res.status(200).json({
      data: await getOrganizations(uid)
    });
  } catch (err) {
    console.error('Erro ao listar organizações:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}

export async function getOrganizations(uid) {
  return (await db.collection('users').doc(uid).collection('organizations').get())
    .docs
    .map(item => {
      let { salesforce_id, name, instance_url, zipContentName } = item.data()
      return ({
        id: item.id,
        salesforce_id,
        name,
        instance_url,
        zipContentName
      })
    })
}
