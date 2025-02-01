const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
    mongoose
        .connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("DB CONNECTED");
        })
        .catch((error) => {
            console.error(error);
            console.log("DB CONNECTION FAILED");
            process.exit(1);
        });
};

module.exports = connectDB;
