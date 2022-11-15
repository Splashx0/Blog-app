const e = require("express");
const Blog = require("../models/blog");

//GET all blogs
const getBlogs = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.status(200).json({ blogs });
    })
    .catch((error) => console.log(error));
};

//GET a single blog
const getBlog = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((error) => res.render("404"));
};

//CREATE a blog
const createBlog = async (req, res) => {
  const { title, body, snippet } = req.body;

  try {
    const blog = await Blog.createBlog(title, snippet, body);
    const success = "Blog added";
    res.status(200).json({ blog, success });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//DELETE a blog
const deleteBlog = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" }); // send json back
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
};
