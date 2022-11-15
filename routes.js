const {
  createContact,
  getAllContacts,
  getSingleContact,
} = require("./controllers");

const router = require("express").Router();

router.post("/", createContact);
router.get("/", getAllContacts);
router.get("/:id", getSingleContact);

module.exports = router;
