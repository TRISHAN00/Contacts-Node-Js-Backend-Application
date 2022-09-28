const express = require("express");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;

app.listen(PORT, (req, res) => {
  console.log("Server on listening port 8080");
});
