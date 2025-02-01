const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

const allRoutes = require("./routes/contact.route");

app.use("/amandeep/api/v1", allRoutes);

app.listen(PORT, () => {
    console.log("Server started at port number : " + PORT);
});

const connectDB = require("./config/database");
connectDB();
