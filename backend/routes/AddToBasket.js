const express = require("express");
const Router = express.Router();

Router.post("/AddToBasket", (req, res) => {
  if (req.session.sessionID == "12345") {
    res.json({ message: "Product Added to Basket" });
  } else {
    res.json({ message: "Invalid User" });
  }
});

module.exports = Router;
