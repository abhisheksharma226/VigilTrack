import MissingPerson from "../models/MissingPerson.js";
import Embedding from "../models/Embedding.js";
import axios from "axios";
import cloudinary from "../config/cloudinary.js";

export const createMissing = async (req, res) => {
  try {
    const { name, age, gender, lastSeenLocation, notes } = req.body;
    const image = req.file;

    // Upload to Cloudinary
    const uploaded = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "missing_persons" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      stream.end(image.buffer);
    });

    // Send image to AI microservice
    const aiRes = await axios.post(
      process.env.AI_URL + "/extract",
      image.buffer,
      { headers: { "Content-Type": "application/octet-stream" } }
    );

    const embed = await Embedding.create({ vector: aiRes.data.vector });

    const person = await MissingPerson.create({
      name,
      age,
      gender,
      lastSeenLocation,
      notes,
      imageUrl: uploaded.secure_url,
      embeddingId: embed._id
    });

    res.json({ msg: "Missing report added", person });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
