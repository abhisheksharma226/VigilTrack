import Sighting from "../models/Sighting.js";
import Embedding from "../models/Embedding.js";
import axios from "axios";
import cloudinary from "../config/cloudinary.js";

export const createSighting = async (req, res) => {
  try {
    const { location, description } = req.body;
    const image = req.file;

    // Upload to Cloudinary
    const uploaded = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "sightings" },
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

    const sight = await Sighting.create({
      imageUrl: uploaded.secure_url,
      location,
      description,
      embeddingId: embed._id
    });

    res.json({ msg: "Sighting submitted", sight });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
