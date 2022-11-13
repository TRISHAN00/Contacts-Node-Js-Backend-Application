const router = require("express").Router();
const {
  getAllContacts,
  createContact,
  getSingleContact,
  deleteContact,
  updateContact,
} = require("./controller");

router.post("/", createContact);
router.get("/", getAllContacts);
router.get("/:id", getSingleContact);
router.get("/:id", deleteContact);
router.get("/:id", updateContact);

module.exports = router;
