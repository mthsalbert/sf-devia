import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import { connByOrgId } from '@/lib/salesforce';
import { parseStringPromise } from 'xml2js';
import { bucket, auth } from '@/lib/firebaseAdmin';

export default async function handler(req, res) {
  let { uid } = await verifyAuth(req);

  ValidateRequest.method(req, 'POST');

  try {
    let { organizationId, types } = JSON.parse(req.body);

    // Get organization reference and validate existence
    const orgRef = db.collection('users').doc(uid).collection('organizations').doc(organizationId);
    if (!(await orgRef.get()).exists) {
      return res.status(404).json({ error: 'Organização não encontrada' });
    }

    // Get Salesforce connection and org info
    const { conn, org } = await connByOrgId({ organizationId, uid });

    if (!types?.length) {
      /* const { access_token: accessToken, instance_url: instanceUrl } = org;
      const metadataObjects = await getMetadataTypesFromSOAP({
        accessToken,
        instanceUrl,
        apiVersion: '63.0'
      });
      types = metadataObjects.filter(({ xmlName }) =>
        ({
          name: xmlName,
          members: ['*']
        })
      ); */
      types = [
        ...[
          'ApexClass',
          'Flow',
          'ApexTrigger'
        ].map((xmlName) => ({
          name: xmlName,
          members: ['*'],
        })),
        ...(await getAllCustomFieldsFromOrg(conn))
      ]
    }

    // Retrieve metadata zip from Salesforce
    const retrieveResponse = await retrieveSourceFromOrg(conn, types);
    const buffer = Buffer.from(retrieveResponse.zipFile, 'base64');
    const fileName = `orgs/${organizationId}/project.zip`;
    const file = bucket.file(fileName);

    await file.save(buffer, {
      metadata: { contentType: 'application/zip' },
      resumable: false,
    });

    await addOrganizationToUserAuth(uid, organizationId);

    // Persist zip content in Firestore
    await orgRef.set({
      zipContentName: file.name,
    }, { merge: true });

    return res.status(200).json({
      zipContentName: file.name,
      metadataObjects,
      zipContent: retrieveResponse.zipFile
    });
  } catch (err) {
    console.error('Erro ao dar o retrieve:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}

/**
 * Retorna os tipos de metadados disponíveis usando a Metadata SOAP API.
 * @param {string} accessToken - Token de acesso da organização Salesforce.
 * @param {string} instanceUrl - URL da instância da organização.
 * @param {string} apiVersion - Versão da API a ser usada (ex: '63.0').
 * @returns {Promise<Array<{ xmlName: string, directoryName: string }>>} Lista de tipos de metadado.
 */
export async function getMetadataTypesFromSOAP({ accessToken, instanceUrl, apiVersion }) {
  const xmlBody = `
    <?xml version="1.0" encoding="UTF-8"?>
    <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:met="http://soap.sforce.com/2006/04/metadata">
      <soapenv:Header>
        <met:SessionHeader>
          <met:sessionId>${accessToken}</met:sessionId>
        </met:SessionHeader>
      </soapenv:Header>
      <soapenv:Body>
        <met:describeMetadata>
          <met:asOfVersion>${apiVersion}</met:asOfVersion>
        </met:describeMetadata>
      </soapenv:Body>
    </soapenv:Envelope>
  `.trim();

  const response = await fetch(`${instanceUrl}/services/Soap/m/${apiVersion}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml',
      'SOAPAction': '*'
    },
    body: xmlBody
  });

  const xml = await response.text();
  const parsed = await parseStringPromise(xml, { explicitArray: false });

  const metadataObjects = parsed?.['soapenv:Envelope']?.['soapenv:Body']?.['describeMetadataResponse']?.['result']?.['metadataObjects'];

  if (!metadataObjects) {
    throw new Error('Não foi possível obter os tipos de metadado (verifique o token ou a URL).');
  }

  return Array.isArray(metadataObjects) ? metadataObjects : [metadataObjects];
}

/**
 * Retorna todos os campos personalizados da organização no formato Objeto.NomeCampo__c.
 * Usa execução paralela com controle por lote para maior desempenho.
 *
 * @param {import('jsforce').Connection} conn
 * @param {number} batchSize - Número de objetos descritos em paralelo por lote (padrão: 10)
 * @returns {Promise<string[]>}
 */
export async function getAllCustomFieldsFromOrg(conn, batchSize = 10) {
  let customObjects = [];
  const globalDescribe = await conn.describeGlobal();
  const customFieldMembers = [];
  const blacklist = new Set(['UserPreference', 'ProcessInstance', 'LoginIp']);

  const eligibleObjects = globalDescribe.sobjects.filter((sObj) =>
    sObj.retrieveable &&
    sObj.queryable &&
    !sObj.deprecatedAndHidden &&
    !blacklist.has(sObj.name)
  );

  // Dividir em batches
  for (let i = 0; i < eligibleObjects.length; i += batchSize) {
    const batch = eligibleObjects.slice(i, i + batchSize);

    const results = await Promise.allSettled(
      batch.map(async (sObj) => {
        try {
          const describe = await conn.sobject(sObj.name).describe();
          const customFields = describe.fields.filter(f => f.custom);
          if (!customFields.length) {
            return []
          }
          customObjects.push(`${sObj.name}`)
          return customFields.map(f => `${sObj.name}.${f.name}`);
        } catch (err) {
          console.warn(`Erro ao descrever ${sObj.name}: ${err.message}`);
          return [];
        }
      })
    );

    // Agrupar os resultados resolvidos
    for (const result of results) {
      if (result.status === 'fulfilled') {
        customFieldMembers.push(...result.value);
      }
    }

  }

  return [
    {
      name: 'CustomField',
      members: customFieldMembers
    },
    {
      name: 'CustomObject',
      members: customObjects
    }
  ];
}

async function addOrganizationToUserAuth(uid, newOrgId) {
  const user = await auth.getUser(uid);

  const existingClaims = user.customClaims || {};
  const existingOrgs = existingClaims.organizations || [];

  // Evita duplicatas
  const updatedOrgs = Array.from(new Set([...existingOrgs, newOrgId]));

  // Atualiza os claims
  await auth.setCustomUserClaims(uid, {
    ...existingClaims,
    organizations: updatedOrgs
  });
}

import JSZip from 'jszip';

/**
 * Faz retrieve da metadata e retorna um zip contendo apenas o conteúdo da pasta `unpackaged`
 */
export async function retrieveSourceFromOrg(conn, types) {
  const retrieveRequest = {
    apiVersion: '63.0',
    unpackaged: { types }
  };

  conn.metadata.pollInterval = 2000; // 2s

  const retrieveResult = await conn.metadata.retrieve(retrieveRequest);
  const processId = retrieveResult.id;

  console.log('Retrieve iniciado. ID:', processId);

  let done = false;
  let result;
  const startTime = Date.now();
  const timeout = 5 * 60 * 1000;

  while (!done) {
    await new Promise((res) => setTimeout(res, conn.metadata.pollInterval));
    result = await conn.metadata.checkRetrieveStatus(processId);
    done = result.done;

    if (Date.now() - startTime > timeout) {
      throw new Error(`Polling timeout após 5 minutos. Process Id = ${processId}`);
    }

    console.log(`Status atual: ${result.status}`);
  }

  if (!result.zipFile) {
    throw new Error('Falha no retrieve: nenhum zip retornado.');
  }

  // Extrai apenas o conteúdo da pasta unpackaged/
  const originalZip = await JSZip.loadAsync(Buffer.from(result.zipFile, 'base64'));
  const unpackagedFolder = originalZip.folder('unpackaged');

  if (!unpackagedFolder) {
    throw new Error('Pasta "unpackaged" não encontrada no zip');
  }

  const newZip = new JSZip();

  // Copia os arquivos da pasta unpackaged para a raiz do novo zip
  await Promise.all(
    Object.keys(originalZip.files)
      .filter(path => path.startsWith('unpackaged/') && !originalZip.files[path].dir)
      .map(async path => {
        const content = await originalZip.files[path].async('nodebuffer');
        const relativePath = path.replace(/^unpackaged\//, '');
        newZip.file(relativePath, content);
      })
  );

  const newZipBuffer = await newZip.generateAsync({ type: 'nodebuffer' });

  return {
    zipFile: newZipBuffer,
    retrieveId: processId
  };
}

