const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const userSchema = new Schema({
  name: String,
  email: String,
});
const User = mongoose.model("User", userSchema);
mongoose
  .connect("mongodb://127.0.0.1:27017/users")
  .then(() => {
    console.log("Database connected");
    app.get("/", (req, res) => {
      let user = new User({
        name: "Trisha",
        email: "trishandsaha43@gmail.com",
      });
      user.save().then((u) => {
        res.json(u);
      });
    });
  })
  .catch((e) => console.log(e));

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
