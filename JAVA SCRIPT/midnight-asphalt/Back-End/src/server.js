import express from 'express';
import { join } from 'path';

const app = express();
const PORT = 3000;

// Servir arquivos estáticos (como index.html e game.js)
app.use(express.static(join(process.cwd(), 'public')));

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
