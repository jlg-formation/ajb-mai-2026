import { json, Router } from "express";

const app = Router();

export default app;

let articles = [
  { id: "a1", name: "Tournevis", price: 1.23, qty: 234 },
  { id: "a2", name: "Pelle", price: 23.99, qty: 6 },
];

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "*");
  next();
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

app.delete("/articles", json(), (req, res) => {
  const ids: string[] = req.body;
  console.log("ids: ", ids);
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
});
