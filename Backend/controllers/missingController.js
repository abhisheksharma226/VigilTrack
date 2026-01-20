import MissingPerson from "../models/MissingPerson.js";
import Embedding from "../models/Embedding.js";
import axios from "axios";
import cloudinary from "../config/cloudinary.js";

export const createMissing = async (req, res) => {
  try {
    const { name, age, gender, lastSeenLocation, notes } = req.body;
    const image = req.file;

    if (!image) {
      return res.status(400).json({ error: "Image is required" });
    }

    // 1️⃣ Upload to Cloudinary
    const uploaded = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "VigilTrack/missing_persons" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(image.buffer);
    });

    // 2️⃣ Call AI service
    const aiRes = await axios.post(
      process.env.AI_URL + "/ai/embedding",
      { imageUrl: uploaded.secure_url },
      { headers: { "Content-Type": "application/json" } }
    );

    if (!aiRes.data.embedding || aiRes.data.embedding.length === 0) {
      return res.status(500).json({ error: "AI embedding failed" });
    }

    // 3️⃣ Save missing person
    const person = await MissingPerson.create({
      name,
      age,
      gender,
      lastSeenLocation,
      notes,
      imageUrl: uploaded.secure_url
    });

    // 4️⃣ Save embedding with proper type and refId
    const embeddingDoc = await Embedding.create({
      vector: aiRes.data.embedding,
      type: "missing",
      refId: person._id
    });

    // 5️⃣ Update missing person with embeddingId
    person.embeddingId = embeddingDoc._id;
    await person.save();

    return res.status(201).json({
      success: true,
      message: "Missing person saved successfully",
      person
    });

  } catch (err) {
    console.error("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
};
