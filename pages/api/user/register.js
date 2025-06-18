// pages/api/user/register.js
import Stripe from 'stripe';
import { auth, db } from '../../../src/lib/firebaseAdmin';
import ValidateRequest from '@/lib/validateRequest';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  try {

    ValidateRequest.method(req, 'POST');

    const { email, password, displayName } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Parâmetros obrigatórios ausentes' });
    }
    
    const userRecord = await auth.createUser({
      email,
      password,
      displayName
    });

    // Criação do cliente no Stripe
    /* const customer = await stripe.customers.create({
      email,
      name: displayName,
      metadata: { uid: userRecord.uid }
    }); */

    // Salvar dados no Firestore
    const userRef = db.collection('users').doc(userRecord.uid);
    await userRef.set({
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName || '',
      // stripeCustomerId: customer.id,
      setupComplete: true,
      createdAt: new Date().toISOString(),
      lastLoginAt: new Date().toISOString()
    }, { merge: true });

    return res.status(200).json({ success: true, uid: userRecord.uid });
  } catch (err) {
    console.error('Erro ao registrar usuário:', err);
    return res.status(500).json({ error: 'Erro interno ao registrar usuário' });
  }
}
