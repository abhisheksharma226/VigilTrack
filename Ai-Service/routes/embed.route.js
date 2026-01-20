import express from 'express';
import { generateEmbedding } from '../models/vit.js';

const router = express.Router();

// POST /ai/embedding
router.post('/embedding', async (req, res) => {
  try {
    const { imageUrl } = req.body;

    if (!imageUrl) return res.status(400).json({ error: 'Image URL required' });

    const embedding = await generateEmbedding(imageUrl);

    res.json({
      success: true,
      dimension: embedding.length, // should be 768
      embedding
    });

  } catch (err) {
    console.error('AI error:', err);
    res.status(500).json({ error: 'Embedding generation failed' });
  }
});

export default router;
