const express = require("express");
const Router = express.Router();
const { PRODUCT, USER } = require("../../models");
const multer = require("multer");
const upload = multer({ dest: "product_img/" });

Router.post("/createProducts", upload.single("product_img"), (req, res) => {
  USER.find({ user_id: req.session.sessionID }).then((userData) => {
    if (userData[0].user_type === "SELLER") {
      const ProductsData = {
        user_id: userData[0].user_id,
        product_img: req.file.destination,
        product_id: req.file.filename,
        title: req.body.title,
        price_old: req.body.price_old,
        price_new: req.body.price_new,
        // product_details: req.body.product_details,
      };

      PRODUCT.exists({ product_id: ProductsData.product_id }).then(
        (response) => {
          // IF EMAIL DOESN'T EXIST
          if (!Boolean(response)) {
            // <----TO CHECK IS USER FILLED ALL REQUIRED VALUES OR NOT---->
            PRODUCT.create(ProductsData);
          }
        }
      );
    }
  });
});

module.exports = Router;
