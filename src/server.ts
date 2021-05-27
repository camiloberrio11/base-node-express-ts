import express from 'express';
import { sumar } from './controllers/controller';

const app = express();

app.get('/', (req, res) => {
  const resultado = sumar(2, 1);
  res.send(`${resultado}`);
});

app.listen(3001, () => console.log('Servidor corriendo'));
