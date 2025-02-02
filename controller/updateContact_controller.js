const Phone = require("../models/contact.model"); // import the Phone model

// creating the controller (function) which will invoke when hitting the route which it is mapped with
exports.updateContact = async (req, res) => {
    try {
        const { id } = req.params; // retrive on id from the params
        const { name, phone } = req.body; // retriv the name and phone from the body which we want to update

        // creating the object name "updatedPhone" of "Phone" type
        const updatedPhone = await Phone.findByIdAndUpdate(
            { _id: id }, // searching on the basis of id
            { name, phone, updatedAt: Date.now() }, // fields to update
            { new: true } // this function response the updated fileds
        );

        if (!updatedPhone) { // if that id doesn't exists
            return res.status(404).json({
                success: false,
                message: "No contact found with this ID",
            });
        }

        // if exists
        res.status(200).json({
            success: true,
            data: updatedPhone,
            message: `Phone number with ${id} is updated`,
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Problem in updating contact",
        });
    }
};
