// pages/api/user/register.js
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import Stripe from 'stripe';

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\\\n/g, '\\n')))
  });
}

const db = getFirestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const { email, password, displayName } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Parâmetros obrigatórios ausentes' });
  }

  try {
    // Criação do usuário no Firebase Auth
    const userRecord = await getAuth().createUser({
      email,
      password,
      displayName
    });

    // Criação do cliente no Stripe
    const customer = await stripe.customers.create({
      email,
      name: displayName,
      metadata: { uid: userRecord.uid }
    });

    // Salvar dados no Firestore
    const userRef = db.collection('users').doc(userRecord.uid);
    await userRef.set({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName || '',
      stripeCustomerId: customer.id,
      setupComplete: false,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    }, { merge: true });

    return res.status(200).json({ success: true, uid: userRecord.uid });
  } catch (err) {
    console.error('Erro ao registrar usuário:', err);
    return res.status(500).json({ error: 'Erro interno ao registrar usuário' });
  }
}
