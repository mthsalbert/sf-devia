import { signOut } from 'firebase/auth';
import { auth } from '../src/lib/firebase';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <nav style={{ padding: '1rem', background: '#eee', marginBottom: '2rem' }}>
      <span style={{ marginRight: '1rem' }}>Chat Portal</span>
      <button onClick={handleLogout}>Sair</button>
    </nav>
  );
}
