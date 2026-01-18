import express from "express";
import { upload } from "../middleware/upload.js";
import { createMissing } from "../controllers/missingController.js";

const router = express.Router();
router.post("/", upload.single("image"), createMissing);

export default router;
