import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import { retrieveSourceFromOrg } from '../organization/retrieve';
import { connByOrgId } from '@/lib/salesforce';

export default async function handler(req, res) {
  const { uid } = await verifyAuth(req);

  ValidateRequest.method(req, 'POST');

  try {
    console.log('req.body', req.body);
    const { deployId } = JSON.parse(req.body);

    const ref = await db
      .collection('users')
      .doc(uid)
      .collection('deploys')
      .doc(deployId)
      .get();

    if (!ref.exists) {
      throw new Error('Deploy não encontrado');
    }

    const deploy = ref.data();
    console.log('deploy', deploy);

    const { conn: sourceConn } = await connByOrgId({
      organizationId: deploy.sourceId,
      uid
    });

    const { conn: targetConn } = await connByOrgId({
      organizationId: deploy.targetId,
      uid
    });

    // Retrieve o zip com package.xml na raiz
    const { zipFile } = await retrieveSourceFromOrg(sourceConn, Object.values(deploy.metadatas));

    const deployOptions = {
      testLevel: deploy.testLevel,
      rollbackOnError: true,
      singlePackage: true
    };

    if (deploy.testLevel === 'RunSpecifiedTests') {
      deployOptions.runTests = deploy.specifiedTests
        ?.split(',')
        .map((t) => t.trim())
        .filter(Boolean);
    }

    // Inicia o deploy
    const deployStart = await targetConn.metadata.deploy(zipFile, deployOptions);
    const deployIdResult = deployStart.id;

    console.log('Deploy iniciado. ID:', deployIdResult);

    // Polling manual
    const pollInterval = 2 * 1000; // 2s
    const timeout = 10 * 60 * 1000; // 10 minutos
    const startTime = Date.now();

    let done = false;
    let deployResponse;

    while (!done) {
      await new Promise((r) => setTimeout(r, pollInterval));

      deployResponse = await targetConn.metadata.checkDeployStatus(deployIdResult, true);
      done = deployResponse.done;

      console.log('deployResponse', deployResponse)

      console.log(`Status: ${deployResponse.status}, Success: ${deployResponse.success}`);

      if (Date.now() - startTime > timeout) {
        throw new Error(`Polling timeout após 10 minutos. Process Id = ${deployIdResult}`);
      }
    }

    if (!deployResponse.success) {
      console.error('Erros no deploy:', deployResponse.details?.componentFailures);
    }

    return res.status(200).json({ deployResponse });

  } catch (err) {
    console.error('Erro ao fazer deploy:', err);
    return res.status(500).json({ error: err.message || 'Erro interno do servidor.' });
  }
}
