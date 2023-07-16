const mongoose = require("mongoose");

// CREATING USER SCHEMA FOR REGISTERING NEW USER
const userSchema = new mongoose.Schema(
  {
    user_id: Number,
    first_name: String,
    email: String,
    last_name: String,
    password: String,
    address: String,
    number: Number,
    // CART
    // DELIVERY HISTORY
  },
  { timestamps: true }
);

// CREATING BASKET SCHEMA FOR USERS
const basketItemSchema = new mongoose.Schema(
  {
    user_id: Number,
    product_id: Number,
    quantity: Number,
  },
  { timestamps: true }
);

// CREATING PRODUCT SCHEMA FOR CREATING NEW PRODUCT
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

// const productDetails = mongoose.model(
//   "productDetailsSchema",
//   productDetailsSchema
// );

// CREATING MODELS OUT OF SCHEMAS
// const productDetailsSchema = new mongoose.Schema({});
const USER = mongoose.model("userSchema", userSchema);
const PRODUCT = mongoose.model("productSchema", productSchema);
const BASKETITEM = mongoose.model("basketItemSchema", basketItemSchema);

// EXPORTING MODELS FOR FURTHER USE IN BACKEND
module.exports = {
  USER,
  PRODUCT,
  BASKETITEM,
};
