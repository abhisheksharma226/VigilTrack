import express from 'express';
import { generateEmbedding } from '../models/vit.js';

const router = express.Router();

router.post('/embedding', async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) {
      return res.status(400).json({ error: 'Image URL required' });
    }

    const embedding = await generateEmbedding(imageUrl);

    res.json({
      success: true,
      dimension: embedding.length,
      embedding
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Embedding failed' });
  }
});

export default router;
