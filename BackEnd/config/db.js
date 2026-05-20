const mongoose = require("mongoose");
const connectedDB= async() => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('Connected!')
    } catch (error) {
        console.log(error);
    }
}
module.exports = connectedDB;