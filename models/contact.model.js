const mongoose = require("mongoose"); // import the mongoose model as this is going to save in the db

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            maxLength: 80,
        },
        phone: {
            type: Number,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema); // exporting the model as want to use it
