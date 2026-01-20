import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import missingRoutes from "./routes/missingRoutes.js";
import sightingRoutes from "./routes/sightingRoutes.js";
import matchRoutes from "./routes/matchRoutes.js";

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/missing", missingRoutes);
app.use("/api/sightings", sightingRoutes);
app.use("/api/match", matchRoutes);

// console.log('Cloud name:', process.env.CLOUDINARY_CLOUD_NAME);
// console.log('API key:', process.env.CLOUDINARY_API_KEY);
// console.log('API secret:', process.env.CLOUDINARY_API_SECRET);


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend running on ${PORT}`));
