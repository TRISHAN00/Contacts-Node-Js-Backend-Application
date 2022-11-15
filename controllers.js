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
    
}
