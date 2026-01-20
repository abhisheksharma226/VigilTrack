import express from "express";
import upload from "../middleware/upload.js";
import { match } from "../controllers/matchController.js";

const router = express.Router();

// POST /api/match
// Either form-data image OR JSON { sightingEmbeddingId }
router.post("/", upload.single("image"), match);

export default router;
