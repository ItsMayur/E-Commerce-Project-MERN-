const express = require("express");
const { USER, BASKETITEM } = require("../models");
const Router = express.Router();

Router.get("/GetBasket", (req, res) => {
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    if (Boolean(response)) {
      BASKETITEM.find({ user_id: req.session.sessionID }).then((data) => {
        res.json(data);
      });
    } else {
      res.send({ message: "USER NOT EXIST" });
    }
  });
});

module.exports = Router;
