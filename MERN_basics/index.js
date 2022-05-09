//Third Party Module
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");

//MiddleWare
app.use(morgan("dev"));
app.use(express.json());

/*app.use("/", (req, res) => {
    res.json("Hi I'm Connected!");
})*/

//Router
const infoRouter = require("./router");
app.use("/info", infoRouter);


//Listen Port
app.listen(5000, () => {
    console.log("Server Started on 5000");
})

//DB Connection
mongoose.connect("mongodb://localhost/myapp", (err) => {
    if(!err) {
        console.log("DB CONNECTED SUCCESSFULY!");
    }
})



