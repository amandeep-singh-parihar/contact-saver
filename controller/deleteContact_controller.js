const Phone = require("../models/contact.model"); // import the Phone model

// creating the controller (function) which will invoke when hitting the route which it is mapped with
exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params; // retriving the id from the params
        const deleted_contact = await Phone.findByIdAndDelete(id); /* create object name deleted_contact 
        which is of "Phone" type and find the specific contact by id
        */
        if (!deleted_contact) { // if the contact with id dosn't exists
            return res.status(404).json({
                success: false,
                message: "No phone number with this id",
            });
        } else { // if exists
            res.status(200).json({
                success: true,
                message: `Phone number of ${deleted_contact.name} (${deleted_contact.phone}) deleted Successfully`,
            });
        }
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
