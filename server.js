const express = require("express");
const app = express();
const PORT = 3000;

const prisma = require("./prisma");

app.use(express.json());
app.use(require("morgan")("dev"));

app.get("/api/restaurant", async (req, res, next) => {
  try {
    const restaurant = await prisma.restaurant.findFirst();
    res.json(restaurant);
  } catch (err) {
    next(err);
  }
});

app.get("/api/appetizers", async (req, res, next) => {
  try {
    const appetizers = await prisma.appetizer.findMany();
    res.json(appetizers);
  } catch (err) {
    next(err);
  }
});

app.get("/api/salads", async (req, res, next) => {
  try {
    const salads = await prisma.salad.findMany();
    res.json(salads);
  } catch (err) {
    next(err);
  }
});

app.get("/api/pizzas", async (req, res, next) => {
  try {
    const pizzas = await prisma.pizza.findMany();
    res.json(pizzas);
  } catch (err) {
    next(err);
  }
});

app.get("/api/pastas", async (req, res, next) => {
  try {
    const pastas = await prisma.pasta.findMany();
    res.json(pastas);
  } catch (err) {
    next(err);
  }
});

app.get("/api/addons", async (req, res, next) => {
  try {
    const addons = await prisma.addOn.findMany();
    res.json(addons);
  } catch (err) {
    next(err);
  }
});

app.get("/api/meatsandfish", async (req, res, next) => {
  try {
    const meatsAndFish = await prisma.meatAndFish.findMany();
    res.json(meatsAndFish);
  } catch (err) {
    next(err);
  }
});

// Simple error handling middleware
app.use((error, req, res, next) => {
  res.status(res.status || 500).send({ error: error });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
