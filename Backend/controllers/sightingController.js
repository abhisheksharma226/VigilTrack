import Sighting from "../models/Sighting.js";
import Embedding from "../models/Embedding.js";
import cloudinary from "../config/cloudinary.js";
import axios from "axios";

export const createSighting = async (req, res) => {
  try {
    const { location, description, reportedBy } = req.body;
    const image = req.file;

    if (!image) {
      return res.status(400).json({ error: "Image is required" });
    }

    // 1️⃣ Upload image to Cloudinary
    const uploaded = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "VigilTrack/sightings" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(image.buffer);
    });

    // 2️⃣ Generate AI embedding (STEP 4)
    const aiRes = await axios.post(
      `${process.env.AI_URL}/ai/embedding`,
      { imageUrl: uploaded.secure_url },
      { headers: { "Content-Type": "application/json" } }
    );

    // 🔴 IMPORTANT: use "embedding", not "vector"
    const embeddingVector = aiRes.data.embedding;

    if (!embeddingVector || embeddingVector.length === 0) {
      return res.status(500).json({ error: "AI embedding failed" });
    }

    // 3️⃣ Save embedding
    const embeddingDoc = await Embedding.create({
      vector: embeddingVector,
      type: "sighting"
    });

    // 4️⃣ Save sighting with embedding reference
    const sighting = await Sighting.create({
      imageUrl: uploaded.secure_url,
      location,
      description,
      reportedBy,
      embeddingId: embeddingDoc._id
    });

    return res.status(201).json({
      success: true,
      message: "Sighting uploaded & embedding generated",
      sighting
    });

  } catch (error) {
    console.error("SIGHTING ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};
