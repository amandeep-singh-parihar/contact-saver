const express = require("express"); // import the express
const app = express(); // create the express app

// import the dotenv config which load all the data in .env into process object
require("dotenv").config();

const PORT = process.env.PORT || 3000;

// use the express middleware
app.use(express.json());

// import all the routes
const allRoutes = require("./routes/contact.route");

// mount the routes to the below
app.use("/amandeep/api/v1", allRoutes);

// listen the app at specific port
app.listen(PORT, () => {
    console.log("Server started at port number : " + PORT);
});

// connection to the database
const connectDB = require("./config/database");
connectDB();
