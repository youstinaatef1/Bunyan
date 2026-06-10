// require env
require("dotenv").config();
// require mongoose 
const mongoose = require("mongoose");
// require model
const Admin = require("../models/Admin");
// create function(server)
const seedSuperAdmin = async() => {
    try {
        // connection db
        await mongoose.connect(process.env.DB_URL);
        console.log("DB Connected");
        // check Admin
        const exitAdmin = await Admin.findOne({
            email: process.env.ADMIN_EMAIL
        });
        if (exitAdmin)  return console.log("Admin Already Exist");
        // create Admin
        const newAdmin = {
            username: "superAdmin",
            email: process.env.ADMIN_EMAIL,
            password: process.env.ADMIN_PASSWORD
        };
        const admin = await Admin.create(newAdmin);
        console.log(admin);
    } catch (error) {
        console.log(error);
    } finally{
        await mongoose.connection.close();
        console.log("DB Is Closed");
        process.exit(0)
    }
}
// call 
seedSuperAdmin();