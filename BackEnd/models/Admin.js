const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
 const adminSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "Username Is Required"],
    },
    email:{
         type: String,
        required: [true, "Email Is Required"],
    },
    password:{
         type: String,
        required: [true, "Password Is Required"],
        minlength: 6,
        select: false
    }
 },{timestamps:true});
 adminSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
 });
 adminSchema.methods.comparePassword = async function (machedPassword) {
    return await bcrypt.compare(machedPassword, this.password);  
 }