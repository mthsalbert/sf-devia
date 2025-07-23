
import { db } from '../../../src/lib/firebaseAdmin';
import { verifyAuth } from '../../../src/lib/firebaseAdmin';
import ValidateRequest from '@/lib/validateRequest';

export default async function handler(req, res) {

  try {
    let { uid } = await verifyAuth(req);

    ValidateRequest.method(req, 'POST');

    const { deployData, action } = JSON.parse(req.body);

    let ref = null
    let snap = null
    if (deployData.id) {
      ref = db.collection('users').doc(uid).collection('deploys').doc(deployData?.id);
      snap = await ref.get();
    }

    if (!(snap?.exists)) {
      ref = await db
        .collection('users')
        .doc(uid)
        .collection('deploys')
        .add(deployData);
    } else {
      /* let updatedMetadatas = snap.data().metadatas ?? {};
      if (action === 'add') {
        // Merge arrays, avoiding duplicates
        updatedMetadatas = Array.from(new Set([...updatedMetadatas, ...(deployData.metadatas || [])]));
      } else if (action === 'remove') {
        // Remove items present in deployData.metadatas from existing metadatas
        const toRemove = new Set(deployData.metadatas || []);
        updatedMetadatas = updatedMetadatas.filter(item => !toRemove.has(item));
      }
      deployData.metadatas = updatedMetadatas; */
      await ref.set({
        ...deployData,
        metadatas: {
          ...snap.data().metadatas,
          ...deployData.metadatas ?? {}
        },
      }, { merge: true });
    }

    return res.status(200).json({ success: true, id: ref.id });
  } catch (err) {
    console.error('Erro ao criar ou atualizar deploy:', err);
    return res.status(500).json({ error: 'Erro interno ao atualizar' });
  }
}
