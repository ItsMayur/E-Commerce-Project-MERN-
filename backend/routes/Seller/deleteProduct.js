const express = require("express");
const Router = express.Router();
const { PRODUCT, USER } = require("../../models");
const fs = require("fs");
const { AsyncLocalStorage } = require("async_hooks");

var isDeleted;

async function deleteProduct(product_id, user_id) {
  await PRODUCT.deleteOne({
    $and: [{ product_id: product_id }, { user_id: user_id }],
  }).then((data) => {
    if (Boolean(data.deletedCount)) {
      const productImg = `${__dirname}/../../product_img/${product_id}`;
      fs.unlink(productImg, (err) => {
        if (err) {
          isDeleted = err;
          return;
        }
      });
      isDeleted = "PRODUCT DELETED";
      return;
    } else {
      isDeleted = "NO PRODUCT TO DELETE";
      return;
    }
  });
}

Router.post("/deleteProduct", (req, res) => {
  USER.find({ user_id: req.session.sessionID }).then((userData) => {
    if (userData[0].user_type === "SELLER") {
      const ProductToDelete = req.body.product_id;
      deleteProduct(ProductToDelete, req.session.sessionID).then((data) => {
        res.send({ message: isDeleted });
      });
    }
  });
});

module.exports = Router;
