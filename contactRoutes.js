const router = require("express").Router();
const getAllContacts = require("./contactsController");

router.get("/", getAllContacts);

module.exports = router;
