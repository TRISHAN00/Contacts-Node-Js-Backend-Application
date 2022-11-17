const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");
const router = require("./routes/contactRoutes");

const app = express("");

app.set("view engine", "ejs");

app.use([
  morgan("dev"),
  express.urlencoded({ extended: true }),
  express.json(),
]);

app.use("/contacts", router);

app.get("/", (_req, res) => {
  res.json({
    message: "Root Route",
  });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server will listen on port ${PORT}`);
});

mongoose
  .connect(`mongodb://127.0.0.1:27017/contacts`)
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((e) => {
    console.log(e);
  });
