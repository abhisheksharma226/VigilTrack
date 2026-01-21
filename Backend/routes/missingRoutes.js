import express from "express";
import upload from "../middleware/upload.js";
import { createMissing } from "../controllers/missingController.js";
import MissingPerson from '../models/MissingPerson.js'

const router = express.Router();

router.post("/", upload.single("image"), createMissing);

// GET all missing persons
router.get('/', async (req, res) => {
    try {
      const persons = await MissingPerson.find().sort({ createdAt: -1 });
      res.json({ success: true, persons });
    } catch (err) {
      console.error(err);
      res.status(500).json({ success: false, error: 'Server Error' });
    }
  });
  
  // GET single missing person by ID
  router.get('/:id', async (req, res) => {
    try {
      const missingPerson = await MissingPerson.findById(req.params.id)
      if (!missingPerson) return res.status(404).json({ error: 'Case not found' })
      res.json(missingPerson)
    } catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Server error' })
    }
  })
  

export default router;
