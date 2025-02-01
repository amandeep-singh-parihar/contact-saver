const Phone = require("../models/contact.model");

exports.updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, phone } = req.body;

        const updatedPhone = await Phone.findByIdAndUpdate(
            { _id: id },
            { name, phone, updatedAt: Date.now() },
            { new: true }
        );

        if (!updatedPhone) {
            return res.status(404).json({
                success: false,
                message: "No contact found with this ID",
            });
        }

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
