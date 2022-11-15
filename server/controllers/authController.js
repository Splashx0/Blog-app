const express = require("express");
const User = require("../models/user");

//LOGIN user
const login = async (req, res) => {};

//REGISTER user
const register = async (req, res) => {
  const { email, username, password } = req.body;
  try {
    const user = await User.register(email, username, password);
    const success = "User registred successfully";
    res.status(200).json({ user, success });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { login, register };
