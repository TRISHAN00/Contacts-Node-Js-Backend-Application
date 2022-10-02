const express = require("express");
const morgan = require("morgan");
const router = require("express").Router();

const app = express();

const contacts = [];

app.use(morgan("dev"));

app.get("/getAllContact", (req, res) => {
  res.json(contacts);
});

app.post("/");

app.get("/", (req, res) => {
  res.send("This is a Root Route");
});

app.get("*", (req, res) => {
  res.send("404 Not Found");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON ${PORT}`);
});
