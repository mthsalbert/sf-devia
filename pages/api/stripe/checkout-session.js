// pages/api/stripe/checkout-session.js
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';
import { initializeApp, cert, getApps } from 'firebase-admin/app';
import Stripe from 'stripe';
import { verifyAuth } from '../../../src/lib/verifyAuth';

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\n/g, '\n')))
  });
}

const db = getFirestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const token = req.headers.authorization?.split('Bearer ')[1];
  if (!token) return res.status(401).json({ error: 'Token ausente' });

  try {
    const userDoc = await db.collection('users').doc(uid).get();
    const userData = userDoc.data();

    if (!userData?.stripeCustomerId) {
      return res.status(400).json({ error: 'Usuário sem Stripe vinculado' });
    }

    const session = await stripe.checkout.sessions.create({
      customer: userData.stripeCustomerId,
      mode: 'subscription',
      line_items: [
        {
          price: process.env.STRIPE_PRICE_ID,
          quantity: 1
        }
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/invoice-paid-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/erro`
    });

    return res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Erro ao criar sessão de pagamento:', err);
    return res.status(500).json({ error: 'Erro interno ao criar sessão' });
  }
}
