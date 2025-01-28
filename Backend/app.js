const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middleware
app.use("/", (req, res, next) => {
  console.log("Request received");
  res.send("Request received");
})

mongoose.connect(
  "mongodb+srv://admin:RCWbhm19982001@cluster-mern-crud-app.iandu.mongodb.net/"
)
  .then(()=> console.log("Connected to MongoDB"))
  .then(()=> {
    app.listen(5000);
  })
  .catch((err) => console.log(err));