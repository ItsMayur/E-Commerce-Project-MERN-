const mongoose = require("mongoose");

// USER SCHEMA
const userSchema = new mongoose.Schema(
  {
    user_id: Number,
    first_name: String,
    email: String,
    last_name: String,
    password: String,
    address: String,
    number: Number,
  },
  { timestamps: true }
);
const USER = mongoose.model("userSchema", userSchema);

const productSchema = new mongoose.Schema({
  product_id: Number,
  title: String,
  price_old: Number,
  price_new: Number,
  rating: Number,
  product_details: [
    { type: mongoose.Schema.Types.ObjectId, ref: "productDetails" },
  ],
});

const productDetailsSchema = new mongoose.Schema({});

const productDetails = mongoose.model(
  "productDetailsSchema",
  productDetailsSchema
);
const PRODUCT = mongoose.model("productSchema", productSchema);
module.exports = {
  USER,
  PRODUCT,
};
