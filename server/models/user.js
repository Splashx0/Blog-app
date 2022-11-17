const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }
  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Incorrect email");
  }
  const auth = await bcrypt.compare(password, user.password);
  if (!auth) {
    throw Error("Incorrect password");
  }
  return user;
};
userSchema.statics.register = async function (email, username, password) {
  // validation
  if (!email || !username || !password) {
    throw Error("All fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw Error("Password not strong enough");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("Email already in use");
  }
  const salt = await bcrypt.genSalt();
  hash = await bcrypt.hash(password, salt);

  const user = await this.create({
    email,
    username,
    password: hash,
  });
  return user;
};

const User = mongoose.model("user", userSchema); // pluriel and search for it in db
module.exports = User;
