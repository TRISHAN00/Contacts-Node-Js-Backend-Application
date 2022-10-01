const contact = require("./Contacts");

exports.getAllContacts = (req, res) => {
  res.json(contact.getAllContacts);
};
