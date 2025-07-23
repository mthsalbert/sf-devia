import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import { getOrganizations } from '../organization/list';
import { connByOrgId } from '@/lib/salesforce';
import { getMetadataTypesFromSOAP } from '../organization/retrieve';

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);

  ValidateRequest.method(req, 'POST');

  try {
    const { type, organizationId } = JSON.parse(req.body);
    const { conn, org } = await connByOrgId({uid, organizationId});

    const { access_token: accessToken, instance_url: instanceUrl } = org;

    const metadataObjects = await getMetadataTypesFromSOAP({
        accessToken,
        instanceUrl,
        apiVersion: '63.0'
    });

    let metadataList = metadataObjects.map(({ xmlName }) =>
        xmlName
    ).sort()

    return res.status(200).json({
        metadataList
    });
  } catch (err) {
    console.error('Erro ao obter os metadados da organização:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
