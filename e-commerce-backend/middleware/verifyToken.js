const jwt = require("jsonwebtoken");
const verifyToken = async (req, res, next) => {
  try {
    const Authentication = req.headers["authorization"];
    const token = Authentication.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.SECRETE_KEY);
    req.body.user = decoded;
    console.log("Verified");

    return next();
  } catch (err) {
    if (err instanceof jwt.NotBeforeError) {
      return res.status(401).json({ message: "Token still not active" });
    }
    if (err instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token Expired" });
    }
    if (err instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "invalid token" });
    }
  }
};
module.exports = verifyToken;
