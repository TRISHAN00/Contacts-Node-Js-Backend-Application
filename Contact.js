const { Schema, default: mongoose } = require("mongoose");

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 30,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: Number,
    required: true,
    trim: true,
    minLength: 2,
    maxLength: 15,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
