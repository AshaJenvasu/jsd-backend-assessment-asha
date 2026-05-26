import express from "express";

const app = express();
const PORT = 3000;

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

app.use(express.json());

app.use((req, res, next) => {
  const now = new Date().toISOString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
});

app.get("/", (req, res) => {
  res.send("Server is running smoothly!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
