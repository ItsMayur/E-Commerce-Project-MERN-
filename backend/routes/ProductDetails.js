const express = require("express");
const Router = express.Router();
const testData = [
  {
    productTitle: "Product 1",
    productNewPrice: "13121",
    productOldPrice: "321314",
    productTag: "#goodNew",
    productImg: "this is a img",
    productId: "343324",
  },
  {
    productTitle: "Product 1",
    productNewPrice: "13121",
    productOldPrice: "321314",
    productTag: "#goodNew",
    productImg: "this is a img",
    productId: "16456234",
  },
  {
    productTitle: "Product 1",
    productNewPrice: "13121",
    productOldPrice: "321314",
    productTag: "#goodNew",
    productImg: "this is a img",
    productId: "54745",
  },
  {
    productTitle: "Product 1",
    productNewPrice: "13121",
    productOldPrice: "321314",
    productTag: "#goodNew",
    productImg: "this is a img",
    productId: "354366",
  },
  {
    productTitle: "Product 1",
    productNewPrice: "13121",
    productOldPrice: "321314",
    productTag: "#goodNew",
    productImg: "this is a img",
    productId: "0988324",
  },
  {
    productTitle: "Product 1",
    productNewPrice: "13121",
    productOldPrice: "321314",
    productTag: "#goodNew",
    productImg: "this is a img",
    productId: "030475",
  },
];
Router.post("/ProductDetails", (req, res) => {
  // MATCH PRODUCT ID AND THEN RETURN PRODUCT DATA
  res.json(testData[0]);
});

module.exports = Router;
