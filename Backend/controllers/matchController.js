import Embedding from "../models/Embedding.js";
import MissingPerson from "../models/MissingPerson.js";
import axios from "axios";
import FormData from "form-data";
import { cosineSimilarity } from "../utils/similarity.js";

const THRESHOLD = 0.65;

export const match = async (req, res) => {
  try {
    let queryVector;

    // OPTION 1: Using existing sighting embedding
    if (req.body.sightingEmbeddingId) {
      const sightingEmbedding = await Embedding.findById(req.body.sightingEmbeddingId);
      if (!sightingEmbedding) {
        return res.status(404).json({ error: "Sighting embedding not found" });
      }
      queryVector = sightingEmbedding.vector;
    }

    // OPTION 2: Upload image (EXACT SAME AS createMissing)
    if (req.file) {
      const form = new FormData();
      form.append("file", req.file.buffer, {
        filename: req.file.originalname,
        contentType: req.file.mimetype,
      });

      const aiRes = await axios.post(
        `${process.env.AI_URL}/ai/embedding`,
        form,
        { headers: form.getHeaders() }
      );

      if (!aiRes.data.embedding || aiRes.data.embedding.length === 0) {
        return res.status(500).json({ error: "AI embedding failed" });
      }

      queryVector = aiRes.data.embedding;
    }

    if (!queryVector) {
      return res.status(400).json({
        error: "Provide sightingEmbeddingId or upload image",
      });
    }

    // Fetch all missing embeddings
    const missingEmbeddings = await Embedding.find({ type: "missing" });
    const matches = [];

    for (const m of missingEmbeddings) {
      if (!m.vector || m.vector.length === 0) continue;

      const score = cosineSimilarity(queryVector, m.vector);

      if (score >= THRESHOLD) {
        const person = await MissingPerson.findById(m.refId);

        if (person) {
          matches.push({
            person,
            similarity: +(score * 100).toFixed(2),
          });
        }
      }
    }

    matches.sort((a, b) => b.similarity - a.similarity);

    res.json({
      success: true,
      count: matches.length,
      matches,
    });
  } catch (err) {
    console.error("MATCH ERROR:", err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
};
