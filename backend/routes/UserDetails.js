const express = require("express");
const { USER } = require("../models");
const Router = express.Router();

Router.get("/UserDetails", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    // IF SESSION EXISTS
    if (Boolean(response)) {
      // FETCHING USER DETIALS
      USER.find({ user_id: req.session.sessionID }).then((data) => {
        res.json(data);
      });
    } else {
      res.send({ message: "USER NOT EXIST" }).status(400);
    }
  });
});

module.exports = Router;
