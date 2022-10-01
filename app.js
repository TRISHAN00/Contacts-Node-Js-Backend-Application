const express = require("express");
const app = express();
const morgan = require("morgan");
const contactRoutes = require("./contactRoutes");
const contacts = require("./Contacts");

app.use(morgan("dev"));
app.use("/contacts", contactRoutes);

app.get("*", (req, res) => {
  res.send(`<h2>Please put valid routes</h2>`);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
