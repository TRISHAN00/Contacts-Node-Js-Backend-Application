const {
  createContact,
  getAllContacts,
  updateContact,
  getSingleContact,
} = require("../controller/contactController");

const router = require("express").Router();

router.post("/", createContact);
router.get("/", getAllContacts);
router.get("/:id", getSingleContact);
router.put("/:id", updateContact);

module.exports = router;
