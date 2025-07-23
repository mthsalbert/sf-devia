import ValidateRequest from '@/lib/validateRequest';
import { verifyAuth, db } from '@/lib/firebaseAdmin';
import OpenAI from 'openai';
import { bucket } from '@/lib/firebaseAdmin';
import { retrieveDocumentation } from './documentation';
import { connByOrgId } from '@/lib/salesforce';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  const { uid } = await verifyAuth(req);

  ValidateRequest.method(req, 'POST');

  try {
    const { organizationId } = JSON.parse(req.body);

    const ref = db.collection('users').doc(uid).collection('organizations').doc(organizationId);
    const snap = await ref.get();

    if (!snap.exists) {
        return res.status(404).json({ error: 'Organização não encontrada' });
    }

    let orgData = snap.data();

    const {filesUploaded, filesFailed} = await uploadFiles({
        organizationId,
        uid,
        fileIds: orgData.fileIds || [],
        vectorId: orgData.vectorId ?? null
    });

    console.log('filesUploaded', filesUploaded)
    await ref.set({ fileIds: filesUploaded }, { merge: true });

    const {assistantId, vectorId} = await createAssistant({
        fileIds: filesUploaded, 
        organizationId, 
        organizationName: orgData.name,
        assistantId: orgData.assistantId ?? null
    });

    await ref.set({ assistantId, vectorId }, { merge: true });

    return res.status(200).json({ 
        organization: {
            assistantId
        } 
    });

  } catch (err) {
    console.error('Erro ao fazer deploy:', err);
    return res.status(500).json({ error: err.message || 'Erro interno do servidor.' });
  }
}

async function uploadFiles({organizationId, uid, fileIds, vectorId}) {
    if (vectorId) {
        try {
            await openai.vectorStores.del(vectorId)
        } catch (error) {
            console.error('Erro ao deletar vector store:', error);
        }
    }
    if (Array.isArray(fileIds) && fileIds.length > 0) {
        try {
            await Promise.allSettled(fileIds.map(id => openai.files.del(id)));
        } catch (error) {
            console.error('Erro ao deletar arquivos existentes:', error);
        }
    }
    let bucketFile = bucket.file(`orgs/${organizationId}/documentation.md`);
    if (!bucketFile.exists()) {
        console.log('documento não existe')
        await retrieveDocumentation({ 
            file: bucketFile, 
            conn: connByOrgId({organizationId, uid}), 
            ia: true
        });
    }
    const fileBuffers = splitMarkdownIntoBuffers((await bucketFile.download()).toString('utf-8'), 0.5);
    const uploadPromises = fileBuffers.map(file =>
        /* openai.files.create({
            file: {
                name: file.filename,
                data: file.buffer
            },
            purpose: 'assistants'
        }) */
        uploadBufferViaFetch(file.buffer, file.filename)
    );

    const results = await Promise.allSettled(uploadPromises);

    let successfulUploads = [];
    let failedUploads = [];
    results.forEach((result, i) => {
        const fileName = fileBuffers[i].filename;
        if (result.status === 'fulfilled') {
            successfulUploads.push(result.value.id);
        } else {
            failedUploads.push({
                filename: fileName,
                error: result.reason
            });
        }
    });

    return {
        filesUploaded: successfulUploads,
        filesFailed: failedUploads
    };
}

async function createAssistant({fileIds, organizationId, organizationName, assistantId}) {
    console.log('fileIds ao criar o assistente:', fileIds);
    const vectorStore = await openai.vectorStores.create({
        name: `Base de Conhecimento do Assistente na organização Salesforce da ${organizationName} (${organizationId})`,
        file_ids: fileIds
    });
    let assistant
    let assistantSetup = {
        name: `Assistente especialista na organização Salesforce da ${organizationName} (${organizationId})`,
        instructions: 'Responda com base no conteúdo do documento fornecido. Você também pode tirar dúvidas sobre o Salesforce em geral.',
        tools: [{ type: 'file_search' }],
        model: 'gpt-4o',
        tool_resources: {
            file_search: {
                vector_store_ids: [vectorStore.id]
            }
        }
    }
    if (assistantId) {
        assistant = await openai.beta.assistants.update(assistantId, assistantSetup);
    } else {
        assistant = await openai.beta.assistants.create(assistantSetup);
    }
    return {
        assistantId: assistant.id,
        vectorId: vectorStore.id
    };
}

/**
 * Divide conteúdo markdown por tópicos e retorna arquivos em buffer para upload.
 * @param {string} markdownContent - Conteúdo markdown completo.
 * @param {number} maxSizeInMB - Tamanho máximo por arquivo (default: 9.5MB).
 * @returns {Array<{filename: string, buffer: Buffer}>}
 */
export function splitMarkdownIntoBuffers(markdownContent, maxSizeInMB = 9.5) {
  const MAX_BYTES = maxSizeInMB * 1024 * 1024;
  const lines = markdownContent.split('\n');

  const topics = [];
  let currentTopic = [];

  // Agrupa por tópico (usando headers markdown)
  for (const line of lines) {
    if (/^#{1,6} /.test(line) && currentTopic.length > 0) {
      topics.push(currentTopic.join('\n'));
      currentTopic = [];
    }
    currentTopic.push(line);
  }
  if (currentTopic.length > 0) topics.push(currentTopic.join('\n'));

  const buffers = [];
  let currentPart = '';
  let partIndex = 1;

  for (const topic of topics) {
    const topicWithBreak = topic + '\n';
    const currentSize = Buffer.byteLength(currentPart, 'utf-8');
    const topicSize = Buffer.byteLength(topicWithBreak, 'utf-8');

    if (topicSize > MAX_BYTES) {
      // Tópico sozinho já ultrapassa o limite — quebra em blocos menores
      let chunk = '';
      let chunkLines = topic.split('\n');
      for (let i = 0; i < chunkLines.length; i++) {
        const testChunk = chunk + chunkLines[i] + '\n';
        if (Buffer.byteLength(testChunk, 'utf-8') > MAX_BYTES && chunk) {
          buffers.push({
            filename: `parte-${partIndex}.md`,
            buffer: Buffer.from(chunk, 'utf-8'),
          });
          partIndex++;
          chunk = '';
        }
        chunk += chunkLines[i] + '\n';
      }
      if (chunk.trim()) {
        buffers.push({
          filename: `parte-${partIndex}.md`,
          buffer: Buffer.from(chunk, 'utf-8'),
        });
        partIndex++;
      }
      continue;
    }

    // Se adicionar esse tópico ultrapassar o limite, salva parte atual
    if (currentSize + topicSize > MAX_BYTES && currentPart) {
      buffers.push({
        filename: `parte-${partIndex}.md`,
        buffer: Buffer.from(currentPart, 'utf-8'),
      });
      partIndex++;
      currentPart = '';
    }

    currentPart += topicWithBreak;
  }

  // Salva o último trecho restante
  if (currentPart.trim()) {
    buffers.push({
      filename: `parte-${partIndex}.md`,
      buffer: Buffer.from(currentPart, 'utf-8'),
    });
  }

  buffers.forEach(b => {
    console.log('buffer:', b.buffer);
    console.log(`${b.filename}: ${b.buffer.length / (1024 * 1024)} MB`);
    });

  return buffers;
}

export async function uploadBufferViaFetch(buffer, filename) {
  try {
    const form = new FormData();
    form.append('purpose', 'assistants');

    form.append('file', new Blob([buffer]), filename); // ✅

    const response = await fetch('https://api.openai.com/v1/files', {
        method: 'POST',
        headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: form,
    });


    if (!response.ok) {
        const err = await response.json();
        console.error('Error uploading file:', err);
        throw new Error(JSON.stringify(err));
    }

    let fileResponse = await response.json();
    console.log('File uploaded successfully:', fileResponse);
    return await fileResponse;
  } catch (error) {
    console.error('Error uploading file via fetch:', error);
    throw error;
  }
}


