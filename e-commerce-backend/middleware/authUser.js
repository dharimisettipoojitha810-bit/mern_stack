const jwt=require("jsonwebtoken");
const isUser = async (req, res, next) => {
  try {
    const Authentication = req.headers["authorization"];
    const token = Authentication.split(" ")[1];
    const decoded = await jwt.verify(token, process.env.SECRETE_KEY);

    console.log(decoded);
    
    if (decoded.role!= "user") {
      return res.status(403).json({ message: "Access Denied , User only" });
    }

    return next();
  } catch (error) {
    if (error instanceof jwt.NotBeforeError) {
      return res.status(401).json({ message: "Token still not active" });
    }
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({ message: "Token Expired" });
    }
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: "invalid token" });
    }

    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = isUser;