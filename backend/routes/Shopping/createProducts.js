const express = require("express");
const Router = express.Router();
const { PRODUCT } = require("../../models");

Router.post("/createProducts", (req, res) => {
  // CHECKING IS EMAIL EXIST IN MONGOOSE DB OR NOT
  const ProductsData = req.body;
  ProductsData.map((Product) => {
    PRODUCT.exists({ product_id: Product.product_id }).then((response) => {
      // IF EMAIL DOESN'T EXIST
      if (!Boolean(response)) {
        // <----TO CHECK IS USER FILLED ALL REQUIRED VALUES OR NOT---->
        PRODUCT.create(Product).then(
          console.log({ message: "PRODUCT CREATED" })
        );
      }
      // IF EMAIL EXIST THEN SEND USER ALREADY EXIST TO FRONTEND
      else {
        console.log({ message: "PRODUCT ALREADY EXIST", Product: Product });
      }
    });
  }).then(res.send(JSON.stringify({ message: "PRODUCTS ADDED" })));
});

module.exports = Router;
