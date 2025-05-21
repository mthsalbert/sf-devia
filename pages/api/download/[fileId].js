// pages/api/download/[fileId].js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  const { fileId } = req.query;

  if (!fileId || !fileId.startsWith('file-')) {
    return res.status(400).json({ error: 'fileId inválido.' });
  }

  try {
    const fileStream = await openai.files.download(fileId);
    const buffer = await fileStream.arrayBuffer();

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', `attachment; filename=${fileId}.txt`);
    res.status(200).send(Buffer.from(buffer));
  } catch (err) {
    console.error('Erro ao baixar arquivo:', err);
    res.status(500).json({ error: 'Erro ao baixar o arquivo da OpenAI.' });
  }
}
