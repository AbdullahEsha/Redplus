var express = require("express");
const mongoose = require("mongoose");

var app = express();

app.get("/", function (req, res) {
  res.send("let's get started.");
});

//=========== mongoDB connection && connection port ================//
const dbUri =
  "mongodb+srv://shahariaresha:5wLMaf6pHu8OPQVP@cluster0.vwysm.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(dbUri)
  .then(() => console.log("mongo connected to port 4000"))
  .then(() => app.listen(4000))
  .catch((err) => console.log("error", err));

//==================================================================//

module.exports = app;
