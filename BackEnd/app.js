// Dot env
require("dotenv").config();

// Express
const express = require("express");
const app = express();
// Middleware Json
app.use(express.json());
// Simple Logger
if(process.env.NODE_ENV === "dev"){
    app.use((req,res, next) =>{
        console.log(`${req.method} ${req.originalUrl}`);
    next();
    });
}
app.get("/test", (req, res) =>{
    res.json({msg: "Test Route"});
});
// Port
const port = process.env.PORT || 3000;
// DB Connection
const connectedDB = require("./config/db");
// Listen / Run Server
app.listen(port, () => {
    console.log(`Server Is Running ${port}`);
})