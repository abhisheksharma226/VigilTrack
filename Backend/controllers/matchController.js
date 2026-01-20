import MissingPerson from "../models/MissingPerson.js";
import Embedding from "../models/Embedding.js";
import cloudinary from "../config/cloudinary.js";
import axios from "axios";
import { cosineSimilarity } from "../utils/similarity.js";

export const matchPerson = async (req, res) => {
  try {
    let queryEmbedding;

    /**
     * CASE 1: Police uploads a new image
     */
    if (req.file) {
      const uploaded = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream(
          { folder: "VigilTrack/query" },
          (err, result) => {
            if (err) reject(err);
            else resolve(result);
          }
        ).end(req.file.buffer);
      });

      const aiRes = await axios.post(
        `${process.env.AI_URL}/ai/embedding`,
        { imageUrl: uploaded.secure_url },
        { headers: { "Content-Type": "application/json" } }
      );

      queryEmbedding = aiRes.data.embedding;
    }

    /**
     * CASE 2: Use existing sighting embedding
     */
    if (req.body.sightingEmbeddingId) {
      const sightEmbed = await Embedding.findById(req.body.sightingEmbeddingId);
      queryEmbedding = sightEmbed.vector;
    }

    if (!queryEmbedding) {
      return res.status(400).json({ error: "No image or sighting provided" });
    }

    /**
     * Fetch all missing person embeddings
     */
    const missingEmbeddings = await Embedding.find({ type: "missing" });

    const results = [];

    for (const emb of missingEmbeddings) {
      const score = cosineSimilarity(queryEmbedding, emb.vector);

      if (score > 0.75) { // threshold
        const person = await MissingPerson.findOne({
          embeddingId: emb._id
        });

        if (person) {
          results.push({
            person,
            similarity: Number((score * 100).toFixed(2)) // %
          });
        }
      }
    }

    results.sort((a, b) => b.similarity - a.similarity);

    res.json({
      success: true,
      matches: results
    });

  } catch (error) {
    console.error("MATCH ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};
