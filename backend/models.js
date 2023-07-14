const { Timestamp } = require("mongodb");
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

const shoppingSessionSchema = new mongoose.Schema(
  {
    id: Number,
    user_id: Number,
    total: Number,
  },
  {
    timestamps: true,
  }
);

module.exports = {
  USER,
  shoppingSessionSchema,
};
