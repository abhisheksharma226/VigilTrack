import mongoose from "mongoose";

const sightingSchema = new mongoose.Schema(
  {
    imageUrl: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    reportedBy: {
      type: String
    },
    embeddingId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Embedding"
    }
  },
  { timestamps: true }
);

export default mongoose.model("Sighting", sightingSchema);
