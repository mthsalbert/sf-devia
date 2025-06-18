import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../src/lib/firebase';
import Navbar from '../components/Navbar';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push('/login');
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, [router]);

  if (loading) return <p>Carregando...</p>;

  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Bem-vindo, {user?.displayName}!</h1>
        <p>Esta é a tela principal do chat.</p>
        <ul>
          {/* <li>
            <a href="/chat/list" style={{ color: 'blue', textDecoration: 'underline' }}>
              Ir para chats
            </a>
          </li> */}
          <li>
            <a href="/organization/list" style={{ color: 'blue', textDecoration: 'underline' }}>
              Ir para organizações
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
