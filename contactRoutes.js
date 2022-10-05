const router = require("express").Router();
const getAllContacts = require("./contactsController");

router.get("/", getAllContacts);
router.post("/");

module.exports = router;
