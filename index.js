const express = require("express");
const PORT = 4001;
const app = express();
const Product = require("./models").product;
const Category = require("./models").category;

app.get("/products", async (req, res, next) => {
  try {
    const products = await Product.findAll({ include: [Category] });
    res.send(products);
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log("server running!"));
