import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import { connByOrgId } from '@/lib/salesforce';

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);

  ValidateRequest.method(req, 'POST');

  try {
    const { type, organizationId } = JSON.parse(req.body);
    const { conn } = await connByOrgId({uid, organizationId});

    // Chamar a Metadata API para listar os metadados do tipo
    const result = await conn.metadata.list([{ type }]);

    // Pode retornar uma lista ou um único item, normaliza para array
    const metadataList = Array.isArray(result) ? result : result ? [result] : [];

    // Extrai apenas os nomes
    const componentsName = metadataList.map((item) => `${type}:${item.fullName}`).sort()

    return res.status(200).json({
        componentsName
    });
  } catch (err) {
    console.error('Erro ao obter os metadados da organização:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
