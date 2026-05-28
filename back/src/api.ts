import { Router } from "express";

const app = Router();

export default app;

const articles = [
  { id: "a1", name: "Tournevis", price: 1.23, qty: 234 },
  { id: "a2", name: "Pelle", price: 23.99, qty: 6 },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  next();
});

app.get("/articles", (req, res) => {
  res.json(articles);
});
