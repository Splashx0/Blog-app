const User = require("../models/user");
const jwt = require("jsonwebtoken");

const maxAge = 3 * 24 * 60 * 60;
const createToken = (_id, username) => {
  return jwt.sign({ _id, username }, "splash secret", {
    expiresIn: maxAge,
  });
};
//LOGIN user
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id, user.username);
    const success = "Correct Data";
    res.status(200).json({ username: user.username, token, success });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//REGISTER user
const register = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = await User.register(email, username, password);
    const token = createToken(user._id, user.username);
    const success = "User registred successfully";
    res.status(200).json({ username, token, success });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { login, register };
