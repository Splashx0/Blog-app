const e = require("express");
const Blog = require("../models/blog");
const User = require("../models/user");

//GET all blogs
const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}).populate("host").sort({ createdAt: -1 });
  res.status(200).json({ blogs });
};

//GET a single blog
const getBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findOne({ _id: id }).populate("host");
    res.status(200).json({ blog });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};

//CREATE a blog
const createBlog = async (req, res) => {
  const { title, body, snippet } = req.body;
  const host = req.user._id;
  try {
    const blog = await Blog.createBlog(host, title, snippet, body);
    const success = "Blog added";

    const user = await User.updateOne(
      { username: blog.host.username },
      { $push: { blogs: blog._id } }
    );

    res.status(200).json({ success });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a blog
const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const blog = await Blog.findOneAndDelete({ _id: id });
    res.status(202).json({ blog });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
};
