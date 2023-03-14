const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(cookieParser());
app.use(express.json());
app.use("/api", router);


const password = 'wS6wCjW3iFoOCjOS';
mongoose
  .connect(
    `mongodb+srv://sagar:${password}@weatherapp.rezxpzt.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(5001);
    console.log("Database is connected! Listening to localhost 5001");
  })
  .catch((err) => console.log(err));
