const express = require("express");
const Router = express.Router();

Router.post("/BuyNow", (req, res) => {
  console.log(req.session.sessionID);
  console.log(req.body);
  if (req.session.sessionID == "12345") {
    res.json({ message: "Payment" });
  } else {
    res.json({ message: "Invalid User" });
  }
});

module.exports = Router;
