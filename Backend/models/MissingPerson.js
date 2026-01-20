import mongoose from "mongoose";

const missingSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  lastSeenLocation: String,
  notes: String,
  imageUrl: String,
  embeddingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Embedding"
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("MissingPerson", missingSchema);
