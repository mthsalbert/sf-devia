import { db } from './firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

/**
 * Armazena uma mensagem no Firestore na estrutura:
 * /chats/{userId}/chatitem/{messageId}
 * 
 * @param {string} userId - ID do usuário autenticado
 * @param {string} role - 'user' ou 'assistant'
 * @param {string} content - conteúdo da mensagem
 */
export async function storeMessage(userId, role, content) {
  const ref = collection(db, 'chats', userId, 'chatitem');
  await addDoc(ref, {
    role,
    content,
    timestamp: serverTimestamp()
  });
}
