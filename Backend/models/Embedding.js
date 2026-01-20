import mongoose from "mongoose";

const embeddingSchema = new mongoose.Schema({
  vector: {
    type: [Number],
    required: true
  },
  type: {
    type: String,
    enum: ["missing", "sighting"],
    required: true
  },
  refId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Embedding", embeddingSchema);
