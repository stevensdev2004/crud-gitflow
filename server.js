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

  // Valida que el nombre sea un texto y no esté vacío
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }

  // Valida que el precio sea un número mayor o igual a 0
  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ error: 'El precio debe ser un número mayor o igual a 0' });
  }

  const product = { id: nextId++, name: name.trim(), price };
  products.push(product);
  res.status(201).json(product);
});

// Obtener la lista de todos los productos
app.get('/products', (req, res) => {
  res.json(products);
});

// Obtener un producto por su id
app.get('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  // Si no existe un producto con ese id, responde con error 404
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  res.json(product);
});

// Actualizar un producto por su id
app.put('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  // Si no existe un producto con ese id, responde con error 404
  if (!product) {
    return res.status(404).json({ error: 'Producto no encontrado' });
  }

  const { name, price } = req.body;

  // Valida que el nombre sea un texto y no esté vacío
  if (typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'El nombre es obligatorio' });
  }

  // Valida que el precio sea un número mayor o igual a 0
  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ error: 'El precio debe ser un número mayor o igual a 0' });
  }

  // Cambia los datos del producto existente
  product.name = name.trim();
  product.price = price;

  res.json(product);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});