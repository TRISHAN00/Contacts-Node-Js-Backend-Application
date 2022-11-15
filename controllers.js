const Contact = require("./Contact");

exports.createContact = (req, res) => {
  const { name, email, phone } = req.body;
  console.log(name, email, phone);
  const contact = new Contact({
    name: name,
    email: email,
    phone: phone,
  });
  contact
    .save()
    .then((c) => {
      res.json(c);
    })
    .catch((e) => {
      console.log(e);
    });
};

exports.getAllContacts = (req, res) => {
  Contact.find()
    .then((contact) => {
      res.json(contact);
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error!!",
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
      console.log(e);
      res.json({
        message: "Error!!",
      });
    });
};
