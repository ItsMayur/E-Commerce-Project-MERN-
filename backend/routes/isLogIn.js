const express = require("express");
const Router = express.Router();
const { USER } = require("./../models");

Router.get("/isLogIn", (req, res) => {
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    if (Boolean(response)) {
      res.send({ message: true });
    } else {
      res.send({ message: false });
    }
  });
});

module.exports = Router;
