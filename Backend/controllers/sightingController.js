import Sighting from "../models/Sighting.js";
import Embedding from "../models/Embedding.js";
import cloudinary from "../config/cloudinary.js";
// import axios from "axios";
// import FormData from "form-data";
import axios from "axios";
import { Blob } from "buffer";


export const createSighting = async (req, res) => {
  try {
    const { location, description, reportedTime, reportedBy } = req.body;
    const image = req.file;

    if (!image) return res.status(400).json({ error: "Image is required" });

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

    // 2️⃣ Generate AI embedding

        const formData = new FormData();

        // download image buffer from cloudinary URL
        const imageResponse = await axios.get(uploaded.secure_url, {
          responseType: "arraybuffer"
        });

        // append as file (this matches UploadFile in FastAPI)
        formData.append(
          "file",
          new Blob([imageResponse.data]),
          "sighting.jpg"
        );

        const aiRes = await axios.post(
          `${process.env.AI_URL}/ai/embedding`,
          formData,
          {
            headers: {
              ...formData.getHeaders?.(), // safe for Node
            },
            timeout: 15000
          }
        );

        if (!aiRes.data || !Array.isArray(aiRes.data.embedding)) {
          return res.status(500).json({ error: "AI embedding failed" });
        }


    // 3️⃣ Save sighting
    const sighting = await Sighting.create({
      imageUrl: uploaded.secure_url,
      location,
      description,
      reportedTime: reportedTime ? new Date(reportedTime) : undefined, // if not sent, Mongoose default will apply
      reportedBy
    });

    // 4️⃣ Save embedding with type and refId
    const embeddingDoc = await Embedding.create({
      vector: aiRes.data.embedding,
      type: "sighting",
      refId: sighting._id
    });

    // 5️⃣ Update sighting with embeddingId
    sighting.embeddingId = embeddingDoc._id;
    await sighting.save();

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
