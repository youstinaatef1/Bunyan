const jwt = require("jsonwebtoken");
const adminMiddleware = async(req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader) return res.json({msg: "Token Not Found"});
        const token = authHeader.split(" ")[1];
                const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
                req.user = decodedToken;
                next();
    } catch (error) {
        return res.status(403).json({ msg: "Invalid or Expired Token", error: error.message });
    }
}
module.exports = adminMiddleware;