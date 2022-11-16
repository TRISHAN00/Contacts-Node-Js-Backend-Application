const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");

const app = express("");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server will listen on port ${PORT}`);
});

mongoose
  .connect(`mongodb://127.0.0.1:27017/test`)
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((e) => {
    console.log(e);
  });
