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
    // blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: "blog" }],
  },
  { timestamps: true }
);

/*userSchema.statics.login = async function (username, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  } else {
    const blog = await this.create({
      title,
      snippet,
      body,
    });
    return blog;
  }
}*/
userSchema.statics.register = async function (email, username, password) {
  // validation
  /*if (!email || !username || !password) {
    throw Error("All fields must be filled");
  }*/
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

  const user = await this.register({
    email,
    username,
    password: hash,
    //blog: [""],
  });
  return user;
};

const User = mongoose.model("user", userSchema); // pluriel and search for it in db
module.exports = User;
