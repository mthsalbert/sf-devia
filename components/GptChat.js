// components/GptChat.js
import { useEffect, useState, useRef } from 'react';
import { auth, db } from '../src/lib/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';

export default function GptChat({ threadId: initialThreadId = null, assistantId }) {
  const [user, setUser] = useState(null);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const threadRef = useRef(initialThreadId);
  const router = useRouter();
  const { chatid } = router.query;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        await setDoc(doc(db, 'users', u.uid), {
          uid: u.uid,
          email: u.email,
          displayName: u.displayName || '',
          createdAt: new Date().toISOString(),
          lastLoginAt: new Date().toISOString()
        }, { merge: true });

        if (!threadRef.current) {
          await createThread(u);
        }

        await loadTitle(u);
        await loadMessagesFromBackend(u);
      }
    });
    return () => unsub();
  }, [initialThreadId]);

  async function createThread(user) {
    try {
      const token = await user.getIdToken();
      const res = await fetch('/api/chat/thread/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ assistantId })
      });

      const data = await res.json();
      if (data.threadId) {
        threadRef.current = data.threadId;
        router.replace(`/chat/${data.chatId}`); // opcional: redirecionar
      }
    } catch (err) {
      console.error('Erro ao criar thread:', err);
    }
  }

  async function loadTitle(user) {
    if (!chatid) return;
    const token = await user.getIdToken();
    const res = await fetch(`/api/chat/thread/get?chatId=${chatid}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    if (data.threadId) setTitle(data.title || '');
  }

  async function loadMessagesFromBackend(user) {
    if (!threadRef.current) return;
    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/chat/thread/messages?threadId=${threadRef.current}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      if (data.messages) setMessages(data.messages);
    } catch (err) {
      console.error('Erro ao carregar mensagens:', err);
    }
  }

  async function handleSend() {
    if (!input.trim()) return;
    setLoading(true);

    try {
      const token = await user.getIdToken();

      const res = await fetch('/api/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          threadId: threadRef.current,
          input,
          assistantId
        })
      });

      const data = await res.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'user', content: input }, { role: 'assistant', content: data.reply }]);
      }

      setInput('');
    } catch (err) {
      console.error('Erro ao enviar mensagem:', err);
    }

    setLoading(false);
  }

  async function renameChat() {
    const newTitle = prompt('Novo título:', title);
    if (!newTitle || !chatid || !user) return;

    try {
      const token = await user.getIdToken();
      const res = await fetch('/api/chat/thread/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ chatId: chatid, title: newTitle })
      });
      const data = await res.json();
      if (data.success) setTitle(newTitle);
    } catch (err) {
      console.error('Erro ao atualizar chat:', err);
    }
  }

  async function handleDeleteChat() {
    if (!user || !chatid) return;
    if (!confirm('Tem certeza que deseja apagar este chat?')) return;

    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/chat/thread/delete?chatId=${chatid}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        router.push('/chat/list');
      }
    } catch (err) {
      console.error('Erro ao deletar chat:', err);
    }
  }

  async function handleClearChat() {
    if (!user || !threadRef.current) return;

    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/chat/thread/clear?threadId=${threadRef.current}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      if (data.success) {
        setMessages([]);
        threadRef.current = null;
      }
    } catch (err) {
      console.error('Erro ao limpar thread:', err);
    }
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h2>{title || 'Chat sem título'}</h2>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={renameChat} disabled={!user}>Renomear</button>
          <button onClick={handleDeleteChat} disabled={loading}>Excluir chat</button>
        </div>
      </div>

      <div style={{ minHeight: '200px', marginBottom: '1rem', whiteSpace: 'pre-wrap' }}>
        {messages.map((m, i) => (
          <p key={i}>
            <strong>{m.role}:</strong> {m.fileId ? (
              <a href={`/api/download/${m.fileId}`} target="_blank" rel="noopener noreferrer">
                {m.content}
              </a>
            ) : m.content}
          </p>
        ))}
      </div>

      <textarea
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Digite sua mensagem"
      /><br />
      <button onClick={handleSend} disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>
    </div>
  );
}
