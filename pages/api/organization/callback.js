import { verifyAuth } from '../../../src/lib/firebaseAdmin';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';
import { auth, db } from '../../../src/lib/firebase'
import admin from 'firebase-admin'
import { signInWithCustomToken } from 'firebase/auth';
import { getAuth } from 'firebase-admin/auth';

export default async function handler(req, res) {
  let { code, state } = req.query;
  let [orgId, uid] = state.split('_sfdevia_')

  /* const params = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    client_id: process.env.SALESFORCE_CLIENT_ID,
    client_secret: process.env.SALESFORCE_CLIENT_SECRET,
    redirect_uri: 'http://localhost:3000/api/organizations/callback',
    code_verifier: orgId
  });

  const response = await fetch(`https://login.salesforce.com/services/oauth2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  if (!response.ok) {
    const error = await response.text();
    console.error('Erro ao trocar token:', error);
    return res.status(500).json({ error: 'Erro ao autenticar com o Salesforce' });
  }

  const firebaseCustomToken = await admin.auth().createCustomToken(uid)
  await signInWithCustomToken(
    auth,
    firebaseCustomToken
  ) */
  

  // orgId = req.query.orgId || tokenData.id.split('/').pop();

  // const ref = doc(db, 'users', uid, 'organizations', orgId);
  // await setDoc(ref, {
  //   ...tokenData,
  //   connectedAt: serverTimestamp(),
  // }, { 
  //   merge: true
  // });

  // res.redirect(`/organization/${orgId}`);
  res.redirect(`/organization/${orgId}?code=${code}`);
}
