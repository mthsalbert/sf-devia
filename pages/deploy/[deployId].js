import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../../src/lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { withAuth } from '../../src/lib/firebase';
import Layout from '../../components/Layout';

function DeployDetailPage() {
    let [user, setUser] = useState(null);
    let [deploy, setDeploy] = useState(null);
    let [organizations, setOrganizations] = useState([]);
    let [sourceOrgId, setSourceOrgId] = useState('');
    let [targetOrgId, setTargetOrgId] = useState('');
    let [metadataTypes, setMetadataTypes] = useState([]);
    let [selectedMetadataType, setSelectedMetadataType] = useState('');
    let [metadataComponents, setMetadataComponents] = useState([]);
    let [selectedComponents, setSelectedComponents] = useState([]);

    let router = useRouter();
    let { deployId } = router.query;

    useEffect(() => {
        let unsub = onAuthStateChanged(auth, async (u) => {
            if (u) {
                setUser(u);
                if (deployId) {
                    await loadDeploy(u, deployId);
                }
            }
        });
        return () => unsub();
    }, [deployId]);

    let loadDeploy = async (user, deployId) => {
        let token = await user.getIdToken();
        let res = await fetch(`/api/deploy/${deployId}?describe=true`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        let data = await res.json();
        setDeploy(data.deploy || null);
        setOrganizations(data.organizations ?? []);
        setSourceOrgId(data.deploy?.sourceId || '');
        setTargetOrgId(data.deploy?.targetId || '');
        setSelectedComponents(data.deploy?.metadatas || [])
        loadMetadataList(data.deploy?.sourceId, user);
    };

    let updateDeploy = async (field, value, action) => {
        console.log('deployId', deployId);
        console.log('updateDeploy', field, value, action);
        if (!deployId) return;
        let token = await user.getIdToken();
        await fetch(`/api/deploy/upsert`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify({ deployData: { id: deployId, [field]: value } })
        });
    };

    let handleSourceChange = async (e) => {
        let newSourceId = e.target.value;
        setSourceOrgId(newSourceId);
        setMetadataTypes([]);
        setSelectedMetadataType('');
        setMetadataComponents([]);
        await updateDeploy('sourceId', newSourceId);
        loadMetadataList(newSourceId, user);
    };

    let loadMetadataList = async (sourceId, user) => {
        if (!sourceId) {
            setMetadataTypes([] || []);
            return
        }
        // Carrega os tipos de metadado da organização
        let token = await user.getIdToken();
        let res = await fetch(`/api/deploy/metadataList`, {
            headers: { Authorization: `Bearer ${token}` },
            method: 'POST',
            body: JSON.stringify({
                organizationId: sourceId
            })
        });
        let types = await res.json();
        setMetadataTypes(types.metadataList || []);
    }

    let handleTargetChange = async (e) => {
        let newTargetId = e.target.value;
        setTargetOrgId(newTargetId);
        await updateDeploy('targetId', newTargetId);
    };

    let handleMetadataTypeChange = async (e) => {
        let type = e.target.value;
        setSelectedMetadataType(type);
        setMetadataComponents([]);

        if (!type || !sourceOrgId) return;

        let token = await user.getIdToken();
        let res = await fetch(`/api/deploy/metadataComponentList`, {
            headers: { Authorization: `Bearer ${token}` },
            method: 'POST',
            body: JSON.stringify({
                organizationId: sourceOrgId,
                type
            })
        });
        let { componentsName } = (await res.json());
        setMetadataComponents(componentsName || []);
    };

    let toggleComponentSelection = async (name) => {
        setSelectedComponents(prev => {
            let action;
            let members = selectedComponents[selectedMetadataType]?.members ?? []
            name = name.split(':').at(1)
            if (members?.includes(name)) {
                action = 'remove';
                members = members.filter(c => c !== name);
            } else {
                action = 'add';
                members = [...members, name];
            }
            // Call updateDeploy after state update
            updateDeploy('metadatas', {
                [selectedMetadataType]: {
                    members,
                    name: selectedMetadataType
                }
            }, action);
            return {
                ...prev,
                [selectedMetadataType]: {
                    members,
                    name: selectedMetadataType
                }
            };
        });
    };

    let handleDeploy = async () => {
        let token = await user.getIdToken();
        await fetch(`/api/deploy/run`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: JSON.stringify({
                deployId
            })
        });
        alert('Deploy iniciado');
    };

    if (!deploy) {
        return <div style={{ padding: '2rem' }}>Carregando deploy...</div>;
    }

    return (
        <Layout>
            <div style={{ padding: '2rem' }}>
                <div>
                    <button disabled={selectedComponents.length === 0} onClick={handleDeploy}>
                        Iniciar Deploy
                    </button>
                </div>

                <div style={{ marginTop: '1rem' }}>
                    <label>Organização de Origem:</label>
                    <select value={sourceOrgId} onChange={handleSourceChange}>
                        <option value="">Selecione</option>
                        {organizations.map(org => (
                            <option key={org.id} value={org.id}>{org.name}</option>
                        ))}
                    </select>

                    <label>Organização de Destino:</label>
                    <select value={targetOrgId} onChange={handleTargetChange}>
                        <option value="">Selecione</option>
                        {organizations.map(org => (
                            <option key={org.id} value={org.id}>{org.name}</option>
                        ))}
                    </select>


                    <label>Nível de Teste:</label>
                    <select value={deploy?.testLevel || ''} onChange={e => {
                        updateDeploy('testLevel', e.target.value);
                        setDeploy({ ...deploy, testLevel: e.target.value });
                    }}>
                        <option value="">Selecione o nível de teste</option>
                        <option value="NoTestRun">Sem execução de testes</option>
                        <option value="RunSpecifiedTests">Executar testes específicos</option>
                        <option value="RunLocalTests">Executar apenas testes locais</option>
                        <option value="RunAllTestsInOrg">Executar todos os testes da organização</option>
                    </select>

                    {deploy?.testLevel === 'RunSpecifiedTests' && (
                        <>
                            <br/>
                            <label>Testes Específicos (separados por vírgula):</label>
                            <textarea
                                rows={3}
                                placeholder="Ex: MyTestClass1,MyTestClass2"
                                value={deploy?.specifiedTests || ''}
                                onChange={e => {
                                    console.log('e.target.value', e.target.value)
                                    updateDeploy('specifiedTests', e.target.value);
                                    setDeploy({ ...deploy, specifiedTests: e.target.value });
                                }}
                                style={{ width: '100%', marginTop: '0.5rem' }}
                            />
                        </>
                    )}
                </div>

                {metadataTypes.length > 0 && (
                    <div style={{ marginTop: '1rem' }}>
                        <label>Tipo de Metadado:</label>
                        <select value={selectedMetadataType} onChange={handleMetadataTypeChange}>
                            <option value="">Selecione</option>
                            {metadataTypes.map((type, idx) => (
                                <option key={idx} value={type}>{type}</option>
                            ))}
                        </select>
                    </div>
                )}

                {metadataComponents.length > 0 && (
                    <div style={{ marginTop: '1rem' }}>
                        <h3>Componentes disponíveis ({selectedMetadataType}):</h3>
                        <ul>
                            {metadataComponents.map(name => (
                                <li key={name}>
                                    <label>
                                        <input
                                            type="checkbox"
                                            checked={selectedComponents[selectedMetadataType]?.members?.includes(name.split(':').at(1)) ?? false}
                                            onChange={() => toggleComponentSelection(name)}
                                        />
                                        {name}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Layout>
    );
}

export default withAuth(DeployDetailPage);
