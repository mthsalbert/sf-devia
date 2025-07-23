// pages/deploy/list.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth, db } from '../../src/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { withAuth } from '../../src/lib/firebase';
import Layout from '../../components/Layout';

function DeploysListPage() {
  const [user, setUser] = useState(null);
  const [deploys, setDeploys] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        await loadDeploys(u);
      }
    });
    return () => unsub();
  }, []);

  async function loadDeploys(user) {
    const token = await user.getIdToken();
    const res = await fetch('/api/deploy/list', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const response = await res.json();
    setDeploys(response.data || []);
  }

  async function createNewDeploy() {
    if (!user) return;
    const token = await user.getIdToken();
    const res = await fetch('/api/deploy/upsert', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        action: 'add',
        deployData: {
          name: 'Novo deploy'
        }
      })
    });
    const data = await res.json();
    if (data.id) {
      router.push(`/deploy/${data.id}`);
    }
  }

  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h1>Seus Deploys</h1>
        <button onClick={createNewDeploy}>+ Novo Deploy</button>
        <ul style={{ marginTop: '1rem' }}>
          {deploys.map(deploy => (
            <li key={deploy.id}>
              <a href={`/deploy/${deploy.id}`}>{deploy.name || deploy.id}</a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default withAuth(DeploysListPage);
