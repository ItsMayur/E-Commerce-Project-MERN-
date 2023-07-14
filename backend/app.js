// EXPRESS SETUP
const express = require("express");
const app = express();
const { USER, shoppingSessionSchema } = require("./models");
const mongoose = require("mongoose");
const sessions = require("express-session");
const cors = require("cors");

// PORT TO RUN SERVER
const PORT = 5000;

// FUNCTIONS
const createNewUser = (userData) => {
  let addUser = new USER(userData);
  addUser
    .save()
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
};

// createNewUser({
//   user_id: 141142312,
//   first_name: "String",
//   last_name: "String",
//   email: "its.mayur718@gmail.com",
//   password: "String",
//   address: "String",
//   number: 90188312,
// });

// ROUTES ADDRESS HERE
const GetSession = require("./routes/GetSession");
const LoginUser = require("./routes/LoginUser");
const CreateUser = require("./routes/CreateUser");
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
app.use(GetSession);
app.use(LoginUser);
app.use(BuyNow);
app.use(AddToBasket);
app.use(ProductDetails);
app.use(CreateUser);

// SERVER SETUP
app.listen(PORT, () => {
  console.log("BACKEND => " + PORT);
});
