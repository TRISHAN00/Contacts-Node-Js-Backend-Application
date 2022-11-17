const Contact = require("../model/Contact");

exports.createContact = (req, res) => {
  let { name, email, phone } = req.body;
  console.log(req.body);

  let error = {};

  if (!name) {
    error.name = "Please put a valid name";
  }

  if (!email) {
    error.email = "Please put a valid email";
  }

  if (!phone) {
    error.phone = "Please put a valid phone number";
  }

  let isError = Object.keys(error).length > 0;

  console.log(error, isError);
  return;

  let contact = new Contact({
    name,
    email,
    phone,
  });

  contact
    .save()
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error occurred!",
      });
    });
};

exports.getAllContacts = (_req, res) => {
  Contact.find()
    .then((contacts) => {
      console.log(contacts);
      res.render("index", { contacts });
    })
    .catch((e) => {
      console.log(r);
      res.json({
        message: "Error occurred!",
      });
    });
};

exports.getSingleContact = (req, res) => {
  let { id } = req.params;
  Contact.findById(id)
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(r);
      res.json({
        message: "Error occurred!",
      });
    });
};

exports.updateContact = (req, res) => {
  let { name, email, phone } = req.body;
  let { id } = req.params;
  console.log(id, name, email, phone);
  Contact.findOneAndUpdate({ _id: id }, { name, email, phone }, { new: true })
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error occurred!",
      });
    });
};

exports.deleteContact = (req, res) => {
  const { id } = req.params;
  Contact.findOneAndDelete(id);
};
