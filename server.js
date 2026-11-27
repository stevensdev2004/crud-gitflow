const express = require('express');

const app = express();
const PORT = 3000;

// Permite recibir datos en formato JSON
app.use(express.json());

// Los productos se guardan en memoria (se borran al apagar el servidor)
let products = [];

// Ruta principal
app.get('/', (req, res) => {
  res.json({ message: 'API de productos funcionando' });
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});