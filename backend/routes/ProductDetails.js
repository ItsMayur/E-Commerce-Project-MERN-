const express = require("express");
const { PRODUCT } = require("../models");
const Router = express.Router();

Router.post("/ProductDetails", (req, res) => {
  PRODUCT.exists({ product_id: req.body.product_id }).then((response) => {
    if (Boolean(response)) {
      PRODUCT.findOne({ product_id: req.body.product_id }).then((data) => {
        // console.log(data);
        res.send(data).status(200);
      });
    } else {
      res.send({ message: "PRODUCT NOT FOUND" });
    }
  });
});

module.exports = Router;
