import express from "express";
import { createSighting } from "../controllers/sightingController.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/",
  upload.single("image"),
  createSighting
);

export default router;
