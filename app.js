const express = require("express");
const app = express("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const router = require("./routes");

app.set("view engine", "ejs");
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/contacts", router);

// Schema declaration
app.get("/", (_req, res) => {
  res.json({
    message: "Welcome",
  });
});

// database and server connection
const PORT = process.env.PORT || 8080;
mongoose
  .connect(`mongodb://127.0.0.1:27017/contacts`)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server start on port ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
