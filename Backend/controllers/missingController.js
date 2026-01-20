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

    // 2️⃣ Call AI service (running on 9000)
    
    const aiRes = await axios.post(
      process.env.AI_URL + "/ai/embedding",
      { imageUrl: uploaded.secure_url },
      { headers: { "Content-Type": "application/json" } }
    );
    
    console.log("AI response:", aiRes.data);
    // 3️⃣ Save embedding
    const embeddingDoc = await Embedding.create({
      vector: aiRes.data.embedding   // <-- was aiRes.data.vector before
    });
    

    // 4️⃣ Save missing person
    const person = await MissingPerson.create({
      name,
      age,
      gender,
      lastSeenLocation,
      notes,
      imageUrl: uploaded.secure_url,
      embeddingId: embeddingDoc._id
    });

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
