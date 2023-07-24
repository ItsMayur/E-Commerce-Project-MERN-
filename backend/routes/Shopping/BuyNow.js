const express = require("express");
const { instance } = require("../../app");
const Router = express.Router();

// TO BE CODE YET !!!!!!!!!!!!!!!!!!!1
Router.post("/BuyNow", (req, res) => {
  var options = {
    amount: req.body.amount,
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.send({ order_id: order.id });
  });
});

module.exports = Router;
