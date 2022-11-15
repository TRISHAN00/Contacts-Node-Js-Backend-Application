const { Schema, model } = require("mongoose");

let contactSchema = new Schema({
  name: String,
  email: String,
  phone: Number,
});

let Contact = model("Contact", contactSchema);

module.exports = Contact;
