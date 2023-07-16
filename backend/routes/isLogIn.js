const express = require("express");
const Router = express.Router();
const { USER } = require("./../models");

Router.get("/isLogIn", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    // IF SESSION IF EXIST
    if (Boolean(response)) {
      res.send({ message: true });
    }
    // IF SESSION ID DOESN'T EXIST
    else {
      res.send({ message: false });
    }
  });
});

module.exports = Router;
