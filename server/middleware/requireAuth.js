const jwt = require("jsonwebtoken");
const User = require("../models/user");

const requireAuth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(404).json({ error: "Authorization token required" });
  }
  const token = authorization.split(" ")[1];

  try {
    const { username } = jwt.verify(token, "splash secret");
    req.user = await User.findOne({ username });
    next(); //fire next handler
  } catch (error) {
    res.status(404).json({ error: "request is not authorized" });
  }
};
module.exports = requireAuth;
