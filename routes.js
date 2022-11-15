const {
  createContact,
  getAllContacts,
  getSingleContact,
  updateContact,
} = require("./controllers");

const router = require("express").Router();

router.post("/", createContact);
router.get("/", getAllContacts);
router.get("/:id", getSingleContact);
router.patch("/:id", updateContact);

module.exports = router;
