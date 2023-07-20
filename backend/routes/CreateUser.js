const express = require("express");
const Router = express.Router();
const { USER } = require("./../models");

Router.post("/CreateUser", (req, res) => {
  // CHECKING IS EMAIL EXIST IN MONGOOSE DB OR NOT
  USER.exists({ email: req.body.email }).then((response) => {
    // IF EMAIL DOESN'T EXIST
    if (!Boolean(response)) {
      const user_id = Math.random() * 100000;
      const newUser = req.body;
      newUser.user_id = user_id;
      newUser.user_type = "BUYER";
      // <----TO CHECK IS USER FILLED ALL REQUIRED VALUES OR NOT---->
      USER.create(req.body)
        .then(() => {
          // ALLOTING SESSION ID TO USER
          req.session.isAuth = true;
          req.session.sessionID = user_id;
        })
        // SENDING USER CREATED TO FRONTEND SO CAN LOGIN
        .then(res.json({ message: "USER CREATED" }).status(200));
    }
    // IF EMAIL EXIST THEN SEND USER ALREADY EXIST TO FRONTEND
    else {
      res.json({ message: "USER ALREADY EXIST" }).status(409);
    }
  });
});

module.exports = Router;
