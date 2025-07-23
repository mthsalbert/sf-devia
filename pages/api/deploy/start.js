import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import { getOrganizations } from '../organization/list';
import { retrieveSourceFromOrg } from '../organization/retrieve';
import { connByOrgId } from '@/lib/salesforce';
import { CloudTasksClient } from '@google-cloud/tasks';
const tasksClient = new CloudTasksClient();

export default async function handler(req, res) {
  let {uid} = await verifyAuth(req);

  ValidateRequest.method(req, 'POST');

  try {
    const queuePath = tasksClient.queuePath(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID, 'southamerica-east1', 'deploys');
    const task = {
        httpRequest: {
            httpMethod: 'POST',
            // url: 'https://deploy-476798814135.europe-west1.run.app',  // Substitua pela URL da sua função
            url: 'https://621058129c85.ngrok-free.app/api/deploy/run',  // Substitua pela URL da sua função
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${req.headers.authorization.split(' ')[1]}`,
            },
            // body: Buffer.from(JSON.stringify({body: req.body})).toString('base64'),
            body: Buffer.from(req.body).toString('base64'),
        },
    };
    const [response] = await tasksClient.createTask({
        parent: queuePath,
        task: task,
    })
    console.log('Task criada com sucesso:', response.name);

    return res.status(200).json({
      task: response.name,
      taskResponse: response
    });
  } catch (err) {
    console.error('Erro ao iniciar o deploy:', err);
    return res.status(500).json({ error: 'Erro interno do servidor.' });
  }
}
