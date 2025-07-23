import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { uid } = await verifyAuth(req);

  ValidateRequest.method(req, 'POST');

  try {
    const { organizationId } = JSON.parse(req.body);

    const ref = db.collection('users').doc(uid).collection('organizations').doc(organizationId);
    const snap = await ref.get();

    if (!snap.exists) {
        return res.status(404).json({ error: 'Organização não encontrada' });
    }

    let orgData = snap.data();

    const thread = await openai.beta.threads.create({
        assistantId: orgData.assistantId
    });

    await ref.set({ assistantId, vectorId }, { merge: true });

    return res.status(200).json({ 
        organization: {
            assistantId
        } 
    });

  } catch (err) {
    console.error('Erro ao fazer deploy:', err);
    return res.status(500).json({ error: err.message || 'Erro interno do servidor.' });
  }
}


