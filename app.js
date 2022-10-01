const express = require("express");
const morgan = require("morgan");
const contactRoutes = require("./contactRoutes");

const app = express();

// middleware
app.use(morgan("dev"));
app.use("/contacts", contactRoutes);

app.get("/", (req, res) => {
  res.send("This is Home Router");
});

app.get("*", (req, res) => {
  res.send("404 Not Found");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, (req, res) => {
  console.log("Server is listening port 8080");
});

// project planing
// user can see all contacts (GET)
// user can get single contact using id (GET)
// user can create contact (POST)
// user can update contact (PUT)
// user can delete contact (DELETE)
