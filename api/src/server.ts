import express, { Request, Response } from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const API_KEY = process.env.POKEMON_TCG_API_KEY;

app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const response = await axios.get(`https://api.pokemontcg.io/v2`, {
      headers: { "X-Api-Key": API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
