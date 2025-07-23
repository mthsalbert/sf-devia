// pages/organization/[id].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../src/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { withAuth, storage } from '../../src/lib/firebase';
import ZipExplorer from '../../components/ZipExplorer';
import Layout from '../../components/Layout';
import { ref, getBlob } from 'firebase/storage';

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

  let loadOrganization = async (user, orgId) => {
    const token = await user.getIdToken();
    const res = await fetch(`/api/organization/${orgId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    const data = await res.json();
    setOrganization(data.organization || null);
    // setOrgBuffer(data.organization?.zipContent)
    // if (data.organization.zipContentName) {
    //   const fileRef = ref(storage, data.organization.zipContentName)
    //   let blob = await getBlob(fileRef)
    //   setOrgBuffer(
    //     await blobToBase64(blob)
    //   )
    // }
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
      const responseData = await res.json();
      await auth.currentUser.getIdToken(true)
      /* if (responseData.zipContentName) {
        const fileRef = ref(storage, responseData.zipContentName)
        let blob = await getBlob(fileRef)
        setOrgBuffer(
          await blobToBase64(blob)
        )
      } */
     setOrgBuffer(responseData.zipContent)
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
          ia: false,
          pack: false,
          upsert: false
        })
      });
      const {documentationUrl, documentationName, zipBase64} = await res.json();
      if (documentationUrl && (!zipBase64 || zipBase64 === undefined)) {
        const url = documentationUrl
        const link = document.createElement('a');
        link.href = url;
        link.download = documentationName + '.md';
        link.click();
        URL.revokeObjectURL(url);
      }
      if (zipBase64) {
        const byteCharacters = atob(zipBase64);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'application/zip' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = documentationName + '.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      console.error('Error retrieving Salesforce metadata:', error);
    }
  }

  async function createAssistant() {
    try {
      const token = await user.getIdToken();
      const res = await fetch(`/api/organization/createAssistent`, {
        headers: { Authorization: `Bearer ${token}` },
        method: 'POST',
        body: JSON.stringify({
          organizationId: organizationId
        })
      });
      const responseData = await res.json();
      console.log('Assistant created:', responseData);
    } catch (error) {
      console.error('Error creating assistant:', error);
    }
  }

  function blobToBase64(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64data = reader.result.split(',')[1]; // remove o prefixo data:...
        resolve(base64data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  }


  if (!organization) return <div style={{ padding: '2rem' }}>Carregando organização...</div>;

  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <h1>{organization.name || 'Organização sem nome'}</h1>
        <p><strong>ID:</strong> {organization.salesforce_id}</p>
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
        <button onClick={createAssistant} style={{ marginTop: '1rem' }}>
          Criar Assistente
        </button>

        {orgBuffer && <ZipExplorer zipBuffer={orgBuffer} />}
      </div>
    </Layout>
  );
}

export default withAuth(OrganizationDetailPage);