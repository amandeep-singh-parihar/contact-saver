const Phone = require("../models/contact.model");

exports.getContact = async (req, res) => {
    try {
        const phone_numbers = await Phone.find();
        res.status(200).json({
            success: true,
            data: phone_numbers,
            message: "All phones numbers Data is fetched",
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};

exports.getContactById = async (req, res) => {
    try {
        const { id } = req.params;
        const phone_number = await Phone.findById(id);
        if (!phone_number) {
            return res.status(404).json({
                success: false,
                message: "No phone number with this id",
            });
        }
        res.status(200).json({
            success: true,
            data: phone_number,
            message: `This number ${phone_number.phone} is of ${phone_number.name}.`,
        });
    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            message: "Something went wrong",
        });
    }
};
