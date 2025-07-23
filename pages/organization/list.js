// pages/organization/list.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../src/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { withAuth } from '../../src/lib/firebase';
import Layout from '../../components/Layout';

function OrganizationListPage() {
  const [user, setUser] = useState(null);
  const [organizations, setOrganizations] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        await loadOrganizations(u);
      }
    });
    return () => unsub();
  }, []);

  async function loadOrganizations(user) {
    const token = await user.getIdToken();
    const res = await fetch('/api/organization/list', {
      headers: { Authorization: `Bearer ${token}` }
    });
    const response = await res.json();
    setOrganizations(response.data || []);
  }

  async function createNewOrganization() {
    if (!user) return;
    const token = await user.getIdToken();
    const res = await fetch('/api/organization/create', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const data = await res.json();
    if (data.organizationId) {
      router.push(`/organization/${data.organizationId}`);
    }
  }

  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h1>Suas organizações</h1>
        <button onClick={createNewOrganization}>+ Nova Organização</button>
        <ul style={{ marginTop: '1rem' }}>
          {organizations.map(org => (
            <li key={org.id}>
              <a href={`/organization/${org.id}`}>{org.name || org.id}</a>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}

export default withAuth(OrganizationListPage);
