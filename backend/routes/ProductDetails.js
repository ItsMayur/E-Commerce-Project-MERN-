const express = require("express");
const { PRODUCT } = require("../models");
const Router = express.Router();

Router.post("/ProductDetails", (req, res) => {
  // CHECKING IS PRODUCT ID EXIST IN MONGOOSE DB OR NOT
  PRODUCT.exists({ product_id: req.body.product_id }).then((response) => {
    // IF PRODUCT ID EXIST
    if (Boolean(response)) {
      // FETCH PRODUCT DATA FROM MONGOOSE DB
      PRODUCT.findOne({ product_id: req.body.product_id }).then((data) => {
        // SENDING PRODUCT DATA TO FRONTEND
        // <----TO SEND JUST THAT DATA WHICH IS NEEDED SO INFORMATION DON'T LEAK---->
        res.send(data).status(200);
      });
    }
    // IF PRODUCT DOESN'T EXIST
    else {
      // SENDING PRODUCT NOT FOUND MESSAGE TO FRONTEND
      res.send({ message: "PRODUCT NOT FOUND" }).status(404);
    }
  });
});

module.exports = Router;
