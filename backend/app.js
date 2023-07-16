// EXPRESS SETUP
const express = require("express");
const app = express();
const { USER, PRODUCT } = require("./models");
const mongoose = require("mongoose");
const sessions = require("express-session");
const cors = require("cors");

// PORT TO RUN SERVER
const PORT = 5000;

// FUNCTIONS
const createProduct = (data) => {
  let addProduct = new PRODUCT(data);
  addProduct
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
};

// createProduct({
//   product_id: 123456,
//   title: "big tv",
//   price_old: 2133,
//   price_new: 111,
//   rating: 2.0,
// });

// ROUTES ADDRESS HERE
const LoginUser = require("./routes/LoginUser");
const CreateUser = require("./routes/CreateUser");
const isLogIn = require("./routes/isLogIn");
const AddToBasket = require("./routes/AddToBasket");
const BuyNow = require("./routes/BuyNow");
const ProductDetails = require("./routes/ProductDetails");

app.use(express.json());
//MONGODB CONNECT
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/shopit", {
      useNewUrlParser: true,
    });
    console.log("Database Connected");
  } catch (error) {
    console.log(error.message);
  }
};
connectDB();

// CORS
app.use(cors({ credentials: true, origin: true }));

// SESSIONS SETUP
app.use(
  sessions({
    secret: "g13u3rj3h2@",
    resave: false,
    saveUninitialized: false,
    cookie: {},
  })
);

// ROUTES
app.use(LoginUser);
app.use(BuyNow);
app.use(AddToBasket);
app.use(ProductDetails);
app.use(CreateUser);
app.use(isLogIn);

// SERVER SETUP
app.listen(PORT, () => {
  console.log("BACKEND => " + PORT);
});
