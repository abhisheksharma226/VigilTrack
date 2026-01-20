import express from "express";
import upload from "../middleware/upload.js";
import { createSighting } from "../controllers/sightingController.js";

const router = express.Router();

router.post("/", upload.single("image"), createSighting);

export default router;
