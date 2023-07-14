const express = require("express");
const Router = express.Router();
const { USER } = require("./../models");

Router.post("/CreateUser", (req, res) => {
  USER.exists({ email: req.body.email }).then((response) => {
    if (!Boolean(response)) {
      const user_id = Math.random() * 100000;
      const newUser = req.body;
      newUser.user_id = user_id;
      USER.create(req.body)
        .then(() => {
          req.session.isAuth = true;
          req.session.sessionID = user_id;
        })
        .then(res.json({ message: "USER CREATED" }));
    } else {
      res.json({ message: "USER ALREADY EXIST" });
    }
  });
});

module.exports = Router;
