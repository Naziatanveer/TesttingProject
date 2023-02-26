const express = require("express");
const app = express();
require("dotenv/config");
const morgan = require("morgan");
const mongoose = require("mongoose");
const connectionsString = process.env.CONNECTION_STRING;
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(cors());
app.options("*", cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("tiny"));

//Routers
const categoriesRoutes = require("./routes/categories");
const productRoutes = require("./routes/Products");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const bankRoute = require("./routes/bankRoute");
const studenRoute = require("./routes/studentRoute");

app.use("/categories", categoriesRoutes);
app.use("/users", usersRoutes);
app.use("/orders", ordersRoutes);
app.use("/products", productRoutes);
app.use("/bank", bankRoute);
app.use("/student", studenRoute);
//DataBase
mongoose
    .connect(connectionsString)
    .then(() => {
        console.log("Database Connection is ready");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(8080, function () {
    console.log("Rest Server is listening on port 8080");
});
