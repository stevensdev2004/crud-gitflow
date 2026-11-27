const express = require('express');

const app = express();
const PORT = 3000;

// Permite recibir datos en formato JSON
app.use(express.json());

// Los productos se guardan en memoria (se borran al apagar el servidor)
let products = [];
let nextId = 1;

// Ruta principal
app.get('/', (req, res) => {
  res.json({ message: 'API de productos funcionando' });
});

// Crear un producto
app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const product = { id: nextId++, name, price };
  products.push(product);
  res.status(201).json(product);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});