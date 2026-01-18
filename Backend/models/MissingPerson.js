import mongoose from "mongoose";

const missingSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  lastSeenLocation: String,
  notes: String,
  imageUrl: String,
  embeddingId: String, 
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("MissingPerson", missingSchema);
