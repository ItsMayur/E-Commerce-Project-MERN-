// EXPRESS SETUP
const express = require("express");
const app = express();
const { USER, PRODUCT } = require("./models");
const Razorpay = require("razorpay");
const mongoose = require("mongoose");
const sessions = require("express-session");
const cors = require("cors");

// PORT TO RUN SERVER
const PORT = 5001;

// FUNCTIONS TO CHECK BACKEND (PRODUCTION ONLY)
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

// ROUTES ADDRESS HERE
const LoginUser = require("./routes/User/LoginUser");
const CreateUser = require("./routes/User/CreateUser");
const isLogIn = require("./routes/isLogIn");
const AddToBasket = require("./routes/Shopping/AddToBasket");
const GetBasket = require("./routes/Shopping/GetBasket");
const BuyNow = require("./routes/Shopping/BuyNow");
const EditUser = require("./routes/User/EditUser");
const UserDetails = require("./routes/User/UserDetails");
const ProductDetails = require("./routes/Shopping/ProductDetails");
const createProducts = require("./routes/Shopping/createProducts");
const getProducts = require("./routes/Shopping/getProducts");
const ChangePassword = require("./routes/User/ChangePassword");

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

// RAZORPAY KEY AND SECRET
var instance = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET",
});

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
app.use(createProducts);
app.use(CreateUser);
app.use(GetBasket);
app.use(isLogIn);
app.use(UserDetails);
app.use(EditUser);
app.use(getProducts);
app.use(ChangePassword);

// SERVER SETUP
app.listen(PORT, () => {
  console.log("BACKEND => " + PORT);
});
module.exports = { instance };
