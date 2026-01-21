import MissingPerson from "../models/MissingPerson.js";
import Embedding from "../models/Embedding.js";
import axios from "axios";
import FormData from "form-data";
import cloudinary from "../config/cloudinary.js";

export const createMissing = async (req, res) => {
  try {
    const { name, age, gender, lastSeenLocation, contactInfo, notes } = req.body;
    const image = req.file;

    if (!image) {
      return res.status(400).json({ error: "Image is required" });
    }

    // 1️⃣ Send image to AI service to get embedding
    const form = new FormData();
    form.append("file", image.buffer, {
      filename: image.originalname,
      contentType: image.mimetype,
    });

    const aiRes = await axios.post(`${process.env.AI_URL}/ai/embedding`, form, {
      headers: form.getHeaders(),
    });

    if (!aiRes.data.embedding || aiRes.data.embedding.length === 0) {
      return res.status(500).json({ error: "AI embedding failed" });
    }

    // 2️⃣ Upload image to Cloudinary
    const uploaded = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { folder: "VigilTrack/missing_persons" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      ).end(image.buffer);
    });

    // 3️⃣ Save missing person in MongoDB
    const person = await MissingPerson.create({
      name,
      age,
      gender,
      lastSeenLocation,
      contactInfo,
      notes,
      imageUrl: uploaded.secure_url,
    });

    // 4️⃣ Save embedding in MongoDB
    const embeddingDoc = await Embedding.create({
      vector: aiRes.data.embedding,
      type: "missing",
      refId: person._id,
    });

    // 5️⃣ Update missing person with embeddingId
    person.embeddingId = embeddingDoc._id;
    await person.save();

    return res.status(201).json({
      success: true,
      message: "Missing person saved successfully",
      person,
    });
  } catch (err) {
    console.error("ERROR:", err.response?.data || err.message);
    res.status(500).json({ error: err.response?.data || err.message });
  }
};
