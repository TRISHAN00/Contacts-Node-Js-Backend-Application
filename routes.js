const { createContact } = require("./controllers");

const router = require("express").Router();

router.post("/", createContact);
router.get("/", getAllContacts);

module.exports = router;
