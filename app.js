const mongoose = require("mongoose");
const express = require("express");
const morgan = require("morgan");

const app = express("");

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server will listen on port ${PORT}`);
});
