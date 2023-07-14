const express = require("express");
const Router = express.Router();

Router.get("/GetSession", (req, res) => {
  req.session.isAuth = true;
  req.session.sessionID = "12345";
  res.send({ message: "Session ID assigned" });
});

module.exports = Router;
