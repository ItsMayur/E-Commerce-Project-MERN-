const express = require("express");
const { USER, BASKETITEM } = require("../models");
const Router = express.Router();

Router.get("/GetBasket", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.body.sessionID }).then((response) => {
    // IF SESSION EXISTS
    if (Boolean(response)) {
      // FETCHING BASKET ITEAMS FROM DATABASE
      BASKETITEM.find({ user_id: req.body.sessionID }).then((data) => {
        // IF NO ITEMS IN BASKET
        if (data.length === 0) {
          res.send({ message: "NO ITEMS IN CART" }).status(200);
        }
        // IF HAS SOME ITEMS IN BASKET
        else {
          res.send(data).status(200);
        }
      });
    }
    // IF SESSION DOESN'T EXISTS
    else {
      res.send({ message: "USER NOT EXIST" }).status(400);
    }
  });
});

module.exports = Router;
