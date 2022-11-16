const {
  createContact,
  getAllContacts,
  updateContact,
} = require("../controller/contactController");

const router = require("express").Router();

router.post("/", createContact);
router.get("/", getAllContacts);
router.put("/:id", updateContact);

module.exports = router;
