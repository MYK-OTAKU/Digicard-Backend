const express = require("express");
const bodyParser = require("body-parser");
const { sequelize } = require("./models");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());

const scanRoutes = require("./routes/scan");
const userRoutes = require("./routes/user");
const favoriteRoutes = require("./routes/favorite");

app.use("/scans", scanRoutes);
app.use("/users", userRoutes);
app.use("/favorites", favoriteRoutes);

const port = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});