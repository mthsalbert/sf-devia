// pages/organization/[id].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../src/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { withAuth } from '../../src/lib/firebase';
import ZipExplorer from '../../components/ZipExplorer';

function OrganizationDetailPage() {
  const [user, setUser] = useState(null);
  const [organization, setOrganization] = useState(null);
  const [orgBuffer, setOrgBuffer] = useState(null);
  const router = useRouter();
  const { organizationId, code } = router.query;

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        if (organizationId) {
          if (code) {
            const token = await u.getIdToken();
            const res = await fetch(`/api/organization/generateToken`, {
              headers: { Authorization: `Bearer ${token}` },
              method: 'POST',
              body: JSON.stringify({
                orgId: organizationId,
                code,
                env: 'login'
              })
            });
            const url = new URL(window.location.href);
            url.searchParams.delete('code');
            window.history.replaceState({}, '', url)
          }
          await loadOrganization(u, organizationId);
        }
      }
    });
    return () => unsub();
  }, [organizationId]);

  async function loadOrganization(user, orgId) {
    const token = await user.getIdToken();
    const res = await fetch(`/api/organization/${orgId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setOrganization(data.organization || null);
    setOrgBuffer(data.organization.zipContent)
  }

  function connectToSalesforce() {
    window.location.href = `/api/organization/auth?orgId=${organizationId}&env=login&user_id=${user.uid}`;
  }

  async function retrieveSalesforceMetadata(){
    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/organization/retrieve`, {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: JSON.stringify({
          organizationId: organizationId,
        })
      });
      const respondeData = await res.json();
      // setOrgBuffer(respondeData.retrieveResponse[0].zipBuffer)
      setOrgBuffer(respondeData.zipFile)
    } catch (error) {
      console.error('Error retrieving Salesforce metadata:', error);
    }
  }

  async function retrieveSalesforceDocumentation(){
    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/organization/documentation`, {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: JSON.stringify({
          organizationId: organizationId,
        })
      });
      const {documentation} = await res.json();
      if (documentation) {
        const blob = new Blob([Uint8Array.from(atob(documentation), c => c.charCodeAt(0))], { type: 'application/zip' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = organizationId + '.md';
        link.click();
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error retrieving Salesforce metadata:', error);
    }
  }

  if (!organization) return <div style={{ padding: '2rem' }}>Carregando organização...</div>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{organization.name || 'Organização sem nome'}</h1>
      <p><strong>ID:</strong> {organization.id}</p>
      <p><strong>Instance URL:</strong> {organization.instance_url}</p>

      <button onClick={connectToSalesforce} style={{ marginTop: '1rem' }}>
        Conectar com Salesforce
      </button>
      <button onClick={retrieveSalesforceMetadata} style={{ marginTop: '1rem' }}>
        Obter metadados do Salesforce
      </button>
      <button onClick={retrieveSalesforceDocumentation} style={{ marginTop: '1rem' }}>
        Obter documentação do Salesforce
      </button>

      {orgBuffer && <ZipExplorer zipBuffer={orgBuffer} />}
    </div>
  );
}

export default withAuth(OrganizationDetailPage);