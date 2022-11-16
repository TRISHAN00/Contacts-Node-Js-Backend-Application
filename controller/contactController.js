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

exports.getAllContacts = (req, res) => {
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
