const Phone = require("../models/contact.model"); // import the Phone model

// creating the controller (function) which will invoke when hitting the route which it is mapped with
exports.getContact = async (req, res) => {
    try {
        const phone_numbers = await Phone.find(); // this function find all the data in the db and saved it in "phone_number" object
        res.status(200).json({
            success: true,
            data: phone_numbers, // response that data
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

// creating the controller (function) which will invoke when hitting the route which it is mapped with
exports.getContactById = async (req, res) => {
    try {
        const { id } = req.params; // retriving the id from the params
        const phone_number = await Phone.findById(id); // creating the "phone_number" object of type "Phone" search on the basis of id
        if (!phone_number) { // if the id doesn't exists
            return res.status(404).json({
                success: false,
                message: "No phone number with this id",
            });
        }
        // if the id exists
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
