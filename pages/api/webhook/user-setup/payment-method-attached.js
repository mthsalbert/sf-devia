// pages/api/webhook/user-setup.js
import Stripe from 'stripe';
import { buffer } from 'micro';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, cert, getApps } from 'firebase-admin/app';

export const config = {
  api: {
    bodyParser: false
  }
};

if (!getApps().length) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\\\n/g, '\\n')))
  });
}

const db = getFirestore();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
if (!process.env.STRIPE_WEBHOOK_SECRET) {
  throw new Error('STRIPE_WEBHOOK_SECRET environment variable is not set.');
}
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Método não permitido');
  const rawBody = await buffer(req);
  const sig = req.headers['stripe-signature'];
  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, endpointSecret);
  } catch (err) {
    console.error('Erro ao validar webhook:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'payment_method.attached') {
    const session = event.data.object;
    const customerId = session.customer;

    // Busca o usuário no Firestore com stripeCustomerId
    const usersRef = db.collection('users');
    const query = usersRef.where('stripeCustomerId', '==', customerId);
    const snapshot = await query.get();

    if (!snapshot.empty) {
      const userDoc = snapshot.docs[0];
      await userDoc.ref.update({ setupComplete: true });
    }
  }

  res.status(200).json({ received: true });
}
