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
    .then((contacts) => {
      res.render("index", { contacts });
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

exports.updateContact = (req, res) => {
  let { name, email, phone } = req.body;
  console.log(name, email, phone);

  let { id } = req.params;
  console.log(id);

  Contact.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        name: name,
        email: email,
        phone: phone,
      },
    },
    { new: true }
  )
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
