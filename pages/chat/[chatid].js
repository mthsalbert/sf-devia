// pages/chat/[chatid].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import GptChat from '../../components/GptChat';
import { auth } from '../../src/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { withAuth } from '../../src/lib/firebase';

function ChatByIdPage() {
  const router = useRouter();
  const { chatid } = router.query;
  const [user, setUser] = useState(null);
  const [threadId, setThreadId] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u || !chatid) return;
      setUser(u);

      const token = await u.getIdToken();
      const res = await fetch(`/api/chat/thread/get?chatId=${chatid}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.threadId) {
        setThreadId(data.threadId);
      } else {
        alert('Chat não encontrado');
        router.push('/chat/list');
      }
    });
    return () => unsub();
  }, [chatid, router]);

  if (!threadId) return <p>Carregando...</p>;
  return <GptChat threadId={threadId} />;
}

export default withAuth(ChatByIdPage);