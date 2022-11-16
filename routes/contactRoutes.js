const {
  createContact,
  getAllContacts,
} = require("../controller/contactController");

const router = require("express").Router();

router.post("/", createContact);
router.get("/", getAllContacts);

module.exports = router;
