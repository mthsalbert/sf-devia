import {getApps, initializeApp, cert} from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import {storage} from 'firebase-admin'

export const adminApp = (() => {
  if (!getApps().length) {
    initializeApp({
      credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS.replace(/\\\\n/g, '\\n'))),
      storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    });
  }
})()

export const auth = getAuth(adminApp)

export const db = getFirestore()

export async function verifyAuth(req) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('Token ausente ou inválido');
  }

  const idToken = authHeader.split('Bearer ')[1];

  try {
    const decodedToken = await auth.verifyIdToken(idToken);
    return decodedToken;
  } catch (error) {
    throw new Error('Token inválido ou expirado');
  }
}

export let bucket = storage().bucket()