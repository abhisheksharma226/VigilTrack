import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from 'cors';
import embedRoute from './routes/embed.route.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/ai', embedRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`🚀 AI Service running at ${PORT}`);
});
