const Contact = require("../model/Contact");

exports.getAllContacts = (_req, res) => {
  Contact.find()
    .then((contacts) => {
      res.render("index", { contacts, error: {} });
    })
    .catch((e) => {
      console.log(e);
      res.json({
        message: "Error occurred!",
      });
    });
};

exports.createContact = (req, res) => {
  console.log(req.body);
  let { name, email, phone } = req.body;

  let error = {};

  if (!name) {
    error.name = "Please input a name";
  }

  if (!email) {
    error.email = "Please input a email";
  }

  if (!phone) {
    error.phone = "Please input a phone number";
  }

  let isError = Object.keys(error).length > 0;

  if (isError) {
    Contact.find()
      .then((contacts) => {
        return res.render("index", { contacts, error });
      })
      .catch((e) => {
        return res.json({
          message: "Error occurred!",
        });
      });
  }

  console.log(error, isError);

  let contact = new Contact({
    name,
    email,
    phone,
  });

  contact
    .save()
    .then((contact) => {
      Contact.find().then((contacts) => {
        return res.render("index", { contacts, error: {} });
      });
    })
    .catch((e) => {
      console.log(e);
      return res.json({
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
  let { id } = req.params;
  Contact.findOneAndDelete({ _id: id }).then(() => {
    Contact.find()
      .then((contacts) => {
        res.render("index", { contacts, error: {} });
      })
      .catch((e) => {
        console.log(e);
        return res.json({
          message: "Error occurred!",
        });
      });
  });
};
