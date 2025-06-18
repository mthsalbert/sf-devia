import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import {connByOrgId} from '@/lib/salesforce';
import {parseStringPromise} from 'xml2js';

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);

  ValidateRequest.method(req, 'POST');

  try {
    const { organizationId } = JSON.parse(req.body);

    // Get organization reference and validate existence
    const orgRef = db.collection('users').doc(uid).collection('organizations').doc(organizationId);
    if (!(await orgRef.get()).exists) {
      return res.status(404).json({ error: 'Organização não encontrada' });
    }

    // Get Salesforce connection and org info
    const { conn, org } = await connByOrgId(req);
    const { access_token: accessToken, instance_url: instanceUrl } = org;

    // Build SOAP request for metadata description
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
        <met:asOfVersion>63.0</met:asOfVersion>
        </met:describeMetadata>
      </soapenv:Body>
      </soapenv:Envelope>
    `.trim();

    // Fetch metadata description from Salesforce
    const soapRes = await fetch(`${instanceUrl}/services/Soap/m/63.0`, {
      method: 'POST',
      headers: {
      'Content-Type': 'text/xml',
      'SOAPAction': '*'
      },
      body: xmlBody
    });

    const xmlResponse = await soapRes.text();
    const parsed = await parseStringPromise(xmlResponse, { explicitArray: false });

    const metadataObjects = parsed?.['soapenv:Envelope']?.['soapenv:Body']?.['describeMetadataResponse']?.['result']?.['metadataObjects'];
    if (!metadataObjects) {
      throw new Error('Nenhum tipo de metadado encontrado ou falha na autenticação.');
    }

    // Filter and map relevant metadata types
    const typesArr = Array.isArray(metadataObjects) ? metadataObjects : [metadataObjects];
    const filteredTypes = typesArr.filter(({ xmlName }) =>
      ['ApexClass', 'CustomField', 'ApexTrigger'].includes(xmlName)
    );
    const xmlNames = filteredTypes.map(t => t.xmlName);

    // Prepare retrieve request
    const retrieveRequest = {
      apiVersion: '63.0',
      unpackaged: {
      types: filteredTypes.map(({ xmlName }) => ({
          name: xmlName,
          members: ['*'],
        })),
      }
    };

    // Retrieve metadata zip from Salesforce
    const retrieveResponse = await conn.metadata.retrieve(retrieveRequest).complete(true);

    // Persist zip content in Firestore
    await orgRef.set({ 
      zipContent: retrieveResponse.zipFile,
      documentation: null
    }, { merge: true });

    // Optionally: let mdContent = await loadZipTree(retrieveResponse.zipFile);
    return res.status(200).json({
        zipFile: retrieveResponse.zipFile
    });
  } catch (err) {
    console.error('Erro ao dar o retrieve:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
