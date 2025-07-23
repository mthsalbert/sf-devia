import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '../../../src/lib/firebaseAdmin';

export default async function handler(req, res) {

  try {
    const {orgId, code, env} = JSON.parse(req.body);

    if (!orgId) {
      return res.status(400).json({ error: 'Token ou dados ausentes.' });
    }

    ValidateRequest.method(req, 'POST');
    let {uid} = await verifyAuth(req);
    const params = new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: process.env.SALESFORCE_CLIENT_ID,
        client_secret: process.env.SALESFORCE_CLIENT_SECRET,
        redirect_uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/organization/callback`,
        code_verifier: orgId
    });

    const response = await fetch(`https://${env}.salesforce.com/services/oauth2/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
    });

    if (!response.ok) {
        const error = await response.text();
        console.error('Erro ao trocar token:', error);
        return res.status(500).json({ error: 'Erro ao autenticar com o Salesforce' });
    }

    let responseBody = await response.json()

    const ref = db.collection('users').doc(uid).collection('organizations').doc(orgId);
    const snap = await ref.get();

    if (!snap.exists) {
      return res.status(404).json({ error: 'Organização não encontrada' });
    }

    let salesforce_id = responseBody.id?.split('/').pop()
    delete responseBody.id
    await ref.set({
        ...responseBody,
        salesforce_id,
        name: responseBody.instance_url.replaceAll('https://', '').split('.').at(0)
    }, { merge: true });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Erro ao gerar token para a organização:', err);
    return res.status(500).json({ error: err.toString() });
  }
}
