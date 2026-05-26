import express from "express";

const app = express();
const PORT = 3000;

// In-memory array to store products
let products = [
  {
    id: 1,
    name: "Fated One of Miracles, Rezael",
    price: 300,
    quantity: 1,
  },
  {
    id: 2,
    name: "Divine Sister, Biscotti",
    price: 2500,
    quantity: 2,
  },
  {
    id: 3,
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
    return res.json(product);
  }
  res.status(200).json(product);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
