const express = require("express"); // importing the express
const router = express.Router(); // importing the express model

const { getContact, getContactById } = require("../controller/getContact_controller");
const { addContact } = require("../controller/addContact_controller");
const { updateContact } = require("../controller/updateContact_controller");
const { deleteContact } = require("../controller/deleteContact_controller");

// map all the controller with the paths
router.get("/getContacts", getContact);
router.get("/getContactById/:id",getContactById)
router.post("/addContact", addContact);
router.put("/updateContact/:id", updateContact);
router.delete("/deleteContact/:id", deleteContact);

module.exports = router; // export the express model