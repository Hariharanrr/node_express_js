const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const port = 8080;

app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/", function (req, res) {
  res.send("hello");
});

app.post("/", function (req, res) {
  var dogAge = Number(req.body.nam) / 15;
  console.log("your age in dog year is " + dogAge + "dog years");
});

app.listen(port);
