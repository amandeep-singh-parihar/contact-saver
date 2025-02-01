const Phone = require("../models/contact.model");

exports.deleteContact = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted_contact = await Phone.findByIdAndDelete(id);

        if (!deleted_contact) {
            return res.status(404).json({
                success: false,
                message: "No phone number with this id",
            });
        } else {
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
