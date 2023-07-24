const express = require("express");
const { PRODUCT, USER } = require("../../models");
const Router = express.Router();

Router.post("/getProducts", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    // IF SESSION EXISTS
    if (Boolean(response)) {
      // FETCHING BASKET ITEAMS FROM DATABASE
      if (req.searchProduct) {
        PRODUCT.find({ title: req.body.searchProduct }).then((data) => {
          // IF NO ITEMS IN BASKET
          if (data.length === 0) {
            res.send({ message: "NO PRODUCTS" }).status(200);
          }
          // IF HAS SOME ITEMS IN BASKET
          else {
            // <----TO SEND JUST THAT DATA WHICH IS NEEDED SO INFORMATION DON'T LEAK---->
            res.send(data).status(200);
          }
        });
      } else {
        PRODUCT.find().then((data) => {
          // IF NO ITEMS IN BASKET
          if (data.length === 0) {
            res.send({ message: "NO PRODUCTS" }).status(200);
          }
          // IF HAS SOME ITEMS IN BASKET
          else {
            // <----TO SEND JUST THAT DATA WHICH IS NEEDED SO INFORMATION DON'T LEAK---->
            res.send(data).status(200);
          }
        });
      }
    }
    // IF SESSION DOESN'T EXISTS
    else {
      res.send({ message: "USER NOT EXIST" }).status(400);
    }
  });
});

module.exports = Router;
