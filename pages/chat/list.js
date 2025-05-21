// pages/chat/list.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../src/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { withAuth } from '../../src/lib/withAuth';

function ChatListPage() {
  const [user, setUser] = useState(null);
  const [chats, setChats] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        await loadChats(u);
      }
    });
    return () => unsub();
  }, []);

  async function loadChats(user) {
    const token = await user.getIdToken();
    const res = await fetch('/api/chat/thread/list', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setChats(data.chats || []);
  }

  async function createNewChat() {
    if (!user) return;
    const token = await user.getIdToken();
    const res = await fetch('/api/chat/thread/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    if (data.chatId) {
      router.push(`/chat/${data.chatId}`);
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Seus chats</h1>
      <button onClick={createNewChat}>+ Novo Chat</button>
      <ul style={{ marginTop: '1rem' }}>
        {chats.map(chat => (
          <li key={chat.id}>
            <a href={`/chat/${chat.id}`}>{chat.title || chat.threadId}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withAuth(ChatListPage);
