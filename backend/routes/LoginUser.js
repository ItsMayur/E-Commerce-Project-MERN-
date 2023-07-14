const express = require("express");
const Router = express.Router();
const { USER } = require("./../models");

Router.post("/LoginUser", (req, res) => {
  USER.exists({ email: req.body.email }).then((response) => {
    if (Boolean(response)) {
      USER.findOne({ email: req.body.email }).then((response) => {
        if (req.body.password === response.password) {
          req.session.isAuth = true;
          req.session.sessionID = response.user_id;
          res.json({ message: "Login Sucessful" });
        } else {
          res.json({ message: "Invalid User" });
        }
      });
    } else {
      res.json({ message: "Invalid User" });
    }
  });
});

module.exports = Router;
