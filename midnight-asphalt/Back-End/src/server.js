import express from 'express';
import cors from "cors";
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Servir arquivos estáticos (como index.html e game.js)
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({message: "Servidor rodando!"})
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
