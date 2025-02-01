const Contact = require("../models/contact.model");

exports.addContact = async (req, res) => {
    try {
        const { name, phone } = req.body;
        const response = await Contact.create({ name, phone });

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
