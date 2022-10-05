const express = require("express");
const morgan = require("morgan");
const contactRoutes = require("./contactRoutes");

const app = express();

app.use(morgan("dev"));
app.use("/contacts", contactRoutes);

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
