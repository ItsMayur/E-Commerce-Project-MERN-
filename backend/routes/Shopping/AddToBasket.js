const express = require("express");
const { USER, PRODUCT, BASKETITEM } = require("../../models");
const Router = express.Router();

async function updateCartItem(data, toUpdate) {
  const idString = String(toUpdate._id);
  await BASKETITEM.updateOne(
    { _id: idString },
    { $set: { quantity: data.quantity } }
  );
}

Router.post("/AddToBasket", (req, res) => {
  // CHECKING IS SESSION ID OF USER EXIST IN MONGOOSE DB
  USER.exists({ user_id: req.session.sessionID }).then((response) => {
    // IF SESSION EXISTS
    if (Boolean(response)) {
      // CHECKING IS PRODUCT ID EXIST IN MONGOOSE DB
      PRODUCT.exists({ product_id: req.body.product_id }).then((response2) => {
        // IF PRODUCT EXISTS
        if (Boolean(response2)) {
          // ADD PRODUCT TO BASKET
          // <----TO CHECK IS ALL THE PRODUCT DETAILS REQUIRE ARE MENTIONED---->
          const basketItem = {
            user_id: req.session.sessionID,
            product_id: req.body.product_id,
            quantity: req.body.quantity,
          };
          BASKETITEM.find(
            { product_id: req.body.product_id },
            { user_id: req.session.sessionID }
          ).then((isItemAlreadyExist) => {
            if (Boolean(isItemAlreadyExist[0])) {
              updateCartItem(basketItem, isItemAlreadyExist[0]);
            } else {
              BASKETITEM.create(basketItem);
            }
          });
          res.send({ message: "PRODUCT ADDED TO BASKET" }).status(200);
        }
        // IF PRODUCT NOT EXIST
        else {
          res.send({ message: "PRODUCT NOT EXIST" }).status(409);
        }
      });
    } else {
      res.send({ message: "USER NOT EXIST" }).status(400);
    }
  });
});

module.exports = Router;
