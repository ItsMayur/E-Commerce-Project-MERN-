const express = require("express");
const { USER, PRODUCT, BASKETITEM } = require("../models");
const Router = express.Router();

Router.post("/AddToBasket", (req, res) => {
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    if (Boolean(response)) {
      PRODUCT.exists({ product_id: req.body.product_id }).then((response2) => {
        if (Boolean(response2)) {
          const basketItem = {
            user_id: req.session.sessionID,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
          };
          BASKETITEM.create(basketItem);
        }
      });
    }
  });
});

module.exports = Router;
