const Contact = require("../models/contact.model"); // import the Contact model

// creating the controller (function) which will invoke when hitting the route which it is mapped with
exports.addContact = async (req, res) => {
    try {
        const { name, phone } = req.body; // retriving the name and phone number from the body
        const response = await Contact.create({ name, phone }); // create an object name "response" of "Contact" type

        res.status(200).json({
            success: true,
            data: response,
            message: "Phone number saved !!",
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            error: "Error while Adding contact",
        });
    }
};
