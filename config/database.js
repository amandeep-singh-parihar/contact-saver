const mongoose = require("mongoose"); // import the mongoose 
require("dotenv").config(); // import the dotenv config which loads all data of the .env into the process object

// the connectDB function which connect the application with the database
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
