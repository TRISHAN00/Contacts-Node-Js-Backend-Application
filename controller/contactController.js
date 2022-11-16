const Contact = require("../model/Contact");

exports.createContact = (req, res) => {
  let { name, email, phone } = req.body;
  console.log(req.body);

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
      console.log(r);
      res.json({
        message: "Error occurred!",
      });
    });
};

exports.getAllContacts = (_req, res) => {
  Contact.find()
    .then((contacts) => {
      res.json(contacts);
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
