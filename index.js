const express = require("express");

const app = express();

app.use(express.json());

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse"   , preco: 3500 }
];

app.get("/produtos", (req, res) => {
  res.status(200).json(produtos);
});

app.listen(3000, () => {
  console.log("API rodando na porta 3000");
});