// this all code will part of lec 51
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Maddyisagoodb$oy";

// ye ek middleware func hai ye 3 arg leta hai 1 req 2 res 3 next is async wla func
const fetchuser = (req, res, next) => {
  // Get the user from the jwt token and add id to req object
  // idher hum header se token get kre ge
  const token = req.header("auth-token");
  if (!token) {
    // 401 is a access denied code
    res
      .status(401)
      .send({ error: "Please authenticate by using a valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res
      .status(401)
      .send({ error: "Please authenticate by using a valid token" });
  }
};

module.exports = fetchuser;
