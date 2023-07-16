const express = require("express");
const Router = express.Router();
const { USER } = require("./../models");

Router.post("/LoginUser", (req, res) => {
  // CHECKING IF EMAIL IF EXIST IN MONGOOSE DB OR NOT
  USER.exists({ email: req.body.email }).then((response) => {
    // IF EMAIL EXIST
    if (Boolean(response)) {
      USER.findOne({ email: req.body.email }).then((response) => {
        // MATCHING DATABASE PASSWORD WITH USER ENTERED PASSWORD
        if (req.body.password === response.password) {
          req.session.isAuth = true;
          // ASSIGNING SESSION ID FROM EXISTING SESSION ID IN MONGOOSE DB AND SIGNING IN
          req.session.sessionID = response.user_id;
          res.json({ message: "Login Sucessful" });
        }
        // IF PASSWORD NOT MATCHED
        else {
          res.json({ message: "Invalid User" });
        }
      });
    }
    // IF EMAIL DOESN'T EXIST
    else {
      res.json({ message: "Invalid User" });
    }
  });
});

module.exports = Router;
