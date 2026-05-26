import express from "express";

const app = express();
const PORT = 3000;

// In-memory array to store products
let products = [
  {
    id: "1",
    name: "Fated One of Miracles, Rezael",
    price: 300,
    quantity: 1,
  },
  {
    id: "2",
    name: "Divine Sister, Biscotti",
    price: 2500,
    quantity: 2,
  },
  {
    id: "3",
    name: "Knight of Gentle Beauty, Nobia",
    price: 100,
    quantity: 1,
  },
];

// Middleware to read JSON Body
app.use(express.json());

// 3. Custom Middleware (Request Logger)
app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Server is running smoothly!");
});

app.get("/products", (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredProducts = products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase()),
    );
    return res.json(filteredProducts);
  }

  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id === id);

  if (product) {
    return res.status(200).json(product);
  }

  res.status(404).json({ message: `Product with ID ${id} not found` });
});

app.post("/products", (req, res) => {
  const { name, price, quantity } = req.body;

  if (!name || !price || !quantity) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  const newProduct = {
    id: (products.length + 1).toString(),
    name,
    price: Number(price),
    quantity: quantity !== undefined ? Number(quantity) : 1,
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
});

app.put("/products/:id", (req, res) => {
  const { id } = req.params;
  const { name, price, quantity } = req.body;

  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: `Product with ID ${id} not found` });
  }

  const currentProduct = products[productIndex];

  if (name) {
    currentProduct.name = name;
  }

  if (price !== undefined) {
    currentProduct.price = Number(price);
  }

  if (quantity !== undefined) {
    currentProduct.quantity = Number(quantity);
  }

  products[productIndex] = currentProduct;

  res.status(200).json(products[productIndex]);
});

app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  const productIndex = products.findIndex((p) => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ message: `Product with ID ${id} not found` });
  }

  const deletedProduct = products.splice(productIndex, 1);

  res.status(200).json({
    message: "Product deleted successfully",
    product: deletedProduct[0],
  });
});

app.use((err, req, res, next) => {
  console.error("Oops! Something went wrong:", err.stack);
  res.status(500).json({
    message: "Internal Server Error",
    error: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
