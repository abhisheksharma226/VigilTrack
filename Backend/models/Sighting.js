import mongoose from "mongoose";

const sightingSchema = new mongoose.Schema({
  imageUrl: String,
  location: String,
  description: String,
  embeddingId: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Sighting", sightingSchema);
