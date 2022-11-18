const {
  createContact,
  getAllContacts,
  updateContact,
  getSingleContact,
  deleteContact,
} = require("../controller/contactController");

const router = require("express").Router();

router.post("/", createContact);
router.get("/", getAllContacts);
router.put("/:id", updateContact);
router.get("/:id", getSingleContact);
router.get("/delete/:id", deleteContact);

module.exports = router;
