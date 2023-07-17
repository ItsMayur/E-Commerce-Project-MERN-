const express = require("express");
const { USER, PRODUCT, BASKETITEM } = require("../models");
const Router = express.Router();

Router.post("/AddToBasket", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    // IF SESSION EXISTS
    if (Boolean(response)) {
      // CHECKING IS PRODUCT ID EXIST IN MONGOOSE DB
      PRODUCT.exists({ product_id: req.body.product_id }).then((response2) => {
        // IF PRODUCT EXISTS
        if (Boolean(response2)) {
          // ADD PRODUCT TO BASKET
          // <----TO CHECK IS ALL THE PRODUCT DETAILS REQUIRE ARE MENTIONED---->
          const basketItem = {
            user_id: req.session.sessionID,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
          };
          BASKETITEM.create(basketItem);
          res.send({ message: "PRODUCT ADDED TO BASKET" }).status(200);
        }
        // IF PRODUCT NOT EXIST
        else {
          res.send({ message: "PRODUCT NOT EXIST" }).status(409);
        }
      });
    } else {
      res.send({ message: "USER NOT EXIST" }).status(400);
    }
  });
});

module.exports = Router;
