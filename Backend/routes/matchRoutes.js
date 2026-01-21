import express from "express";
import upload from "../middleware/upload.js";
import { match } from "../controllers/matchController.js";

const router = express.Router();

// POST /api/match
// Either form-data file OR JSON { sightingEmbeddingId }
router.post("/", upload.single("file"), match);

export default router;
