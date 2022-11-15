const express = require("express");
const app = express("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Schema declaratin
let Schema = mongoose.Schema;
let contactSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
});
let Contact = mongoose.model("Contact", contactSchema);

app.post("/", (req, res) => {
  const { name, email, phone } = req.body;
  const contact = new Contact({
    name: name,
    email: email,
    phone: phone,
  });
  contact
    .save()
    .then((c) => {
      console.log(c);
      res.json({
        message: "Success",
      });
    })
    .catch((e) => {
      console.log(e);
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
