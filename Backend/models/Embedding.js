import mongoose from "mongoose";

const embedSchema = new mongoose.Schema({
  vector: [Number],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Embedding", embedSchema);
