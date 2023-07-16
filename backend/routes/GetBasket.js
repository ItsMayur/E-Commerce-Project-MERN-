const express = require("express");
const { USER, BASKETITEM } = require("../models");
const Router = express.Router();

Router.get("/GetBasket", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    // IF SESSION EXISTS
    if (Boolean(response)) {
      // FETCHING BASKET ITEAMS FROM DATABASE
      BASKETITEM.find({ user_id: req.session.sessionID }).then((data) => {
        res.json(data).status(200);
      });
    }
    // IF SESSION DOESN'T EXISTS
    else {
      res.send({ message: "USER NOT EXIST" }).status(400);
    }
  });
});

module.exports = Router;
