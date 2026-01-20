import express from "express";
import upload from "../middleware/upload.js";
import { matchPerson } from "../controllers/matchController.js";

const router = express.Router();

// Police can upload image OR send sightingEmbeddingId
router.post("/", upload.single("image"), matchPerson);

export default router;
