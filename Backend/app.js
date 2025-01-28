const express = require("express");
const mongoose = require("mongoose");
const router = require("./Routes/UserRoute");

const app = express();

// middleware
app.use("/users", router);

mongoose.connect(
  "mongodb+srv://admin:RCWbhm19982001@cluster-mern-crud-app.iandu.mongodb.net/"
)
  .then(()=> console.log("Connected to MongoDB"))
  .then(()=> {
    app.listen(5000);
  })
  .catch((err) => console.log(err));