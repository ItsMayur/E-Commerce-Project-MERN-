const express = require("express");
const { USER } = require("../models");
const Router = express.Router();

Router.post("/EditUser", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    // IF SESSION EXIST
    if (Boolean(response)) {
      // UPDATE USER DATA
      USER.updateOne(req.body).then((result) => {
        res.json(result).status(200);
      });
    }
    // IF SESSION DOESN'T EXIST
    else {
      res.send({ message: "USER NOT EXIST" }).status(400);
    }
  });
});

module.exports = Router;
