const {
  createContact,
  getAllContacts,
  updateContact,
  getSingleContact,
} = require("../controller/contactController");

const router = require("express").Router();

router.post("/", createContact);
router.get("/", getAllContacts);
router.put("/:id", updateContact);
router.get("/:id", getSingleContact);

module.exports = router;
