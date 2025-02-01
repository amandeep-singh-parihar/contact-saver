const express = require("express");
const router = express.Router();

const { getContact, getContactById } = require("../controller/getContact_controller");
const { addContact } = require("../controller/addContact_controller");
const { updateContact } = require("../controller/updateContact_controller");
const { deleteContact } = require("../controller/deleteContact_controller");

router.get("/getContacts", getContact);
router.get("/getContactById/:id",getContactById)
router.post("/addContact", addContact);
router.put("/updateContact/:id", updateContact);
router.delete("/deleteContact/:id", deleteContact);

module.exports = router;