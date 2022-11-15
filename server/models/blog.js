const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

blogSchema.statics.createBlog = async function (title, snippet, body) {
  // validation
  if (!title || !snippet || !body) {
    throw Error("All fields must be filled");
  } else {
    const blog = await this.create({
      title,
      snippet,
      body,
    });
    return blog;
  }
};

const Blog = mongoose.model("blog", blogSchema); // pluriel and search for it in db
module.exports = Blog;
