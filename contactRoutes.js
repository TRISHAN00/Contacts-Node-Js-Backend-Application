const { getAllContacts } = require("./contactController");

const router = require("express").Router();

router.get("/", getAllContacts);

module.exports = router;
