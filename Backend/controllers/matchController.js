import MissingPerson from "../models/MissingPerson.js";
import Sighting from "../models/Sighting.js";
import Embedding from "../models/Embedding.js";
import { cosineSimilarity } from "../utils/similarity.js";

export const getMatches = async (req, res) => {
  try {
    const sightId = req.params.id;

    const sight = await Sighting.findById(sightId);
    const sightEmbed = await Embedding.findById(sight.embeddingId);

    const allMissing = await MissingPerson.find();
    const matches = [];

    for (let m of allMissing) {
      const mEmbed = await Embedding.findById(m.embeddingId);
      const score = cosineSimilarity(sightEmbed.vector, mEmbed.vector);

      if (score > 0.80) {
        matches.push({ person: m, similarity: score });
      }
    }

    res.json(matches);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
