import mongoose from "mongoose";

const embeddingSchema = new mongoose.Schema({
  vector: {
    type: [Number],
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Embedding", embeddingSchema);
