const express = require("express");
const app = express();
const morgan = require("morgan");
const { contactRoute } = require("./routerContract");
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));
app.use("/contact", contactRoute);

app.get("*", (req, res) => {
  res.send("This use the correct route");
});

app.listen(PORT, (req, res) => {
  console.log("Server on listening port 8080");
});
