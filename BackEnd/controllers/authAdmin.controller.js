// Admin Model
const Admin = require("../models/Admin");
// Joi Schema
const loginSchema = require("./validation/authAdminValidation");
// JWT
const jwt = require("jsonwebtoken");
// Function
const loginController = async (req, res) => {
  try {
    // Joi Validation
    const { error, value } = loginSchema.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (error)
      return res.status(400).json({
        msg: error.details.map((err) => err.message),
      });

    //   Get Data From Value
    const { email, password } = value;
    //   Check Admin Found Or No
    const admin = await Admin.findOne({ email }).select("+password");
    //   If User Not Found
    if (!admin)
      return res.status(400).json({ msg: "Invalid Email Or Password" });
    //   Compare Password
    const matchedPassword = await admin.comparePassword(password);
    //   If Password False
    if (!matchedPassword)
      return res.status(400).json({ msg: "Invalid Email Or Password" });

    const token = await jwt.sign(
      { id: admin._id, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      },
    );
    res.status(200).json({ msg: "Success Login", token });
  } catch (error) {
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
// Export
module.exports = loginController;
