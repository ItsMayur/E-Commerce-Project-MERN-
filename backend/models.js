const mongoose = require("mongoose");

// CREATING USER SCHEMA FOR REGISTERING NEW USER
// <----TO ADD REQUIRED OR NOT TO EACH SCHEMA TO AVOID ANY CLASHES IN MISSING FEILDS---->
const userSchema = new mongoose.Schema(
  {
    user_id: { type: String, require: true },
    first_name: { type: String, require: true },
    user_type: { type: String, require: true },
    email: String,
    last_name: String,
    password: { type: String, require: true },
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
    user_id: { type: String, require: true },
    product_id: { type: String, require: true },
    quantity: { type: Number, require: true },
  },
  { timestamps: true }
);

// CREATING PRODUCT SCHEMA FOR CREATING NEW PRODUCT
const productSchema = new mongoose.Schema({
  product_img: { type: String },
  product_id: { type: String, require: true },
  title: { type: String, require: true },
  price_old: Number,
  price_new: { type: Number, require: true },
  rating: { type: Number, require: true },
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
