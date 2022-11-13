const e = require("express");
const Blog = require("../models/blog");

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((blogs) => {
      res.status(200).json({ blogs });
    })
    .catch((error) => console.log(error));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result });
    })
    .catch((error) => res.render("404"));
};

const blog_create_post = async (req, res) => {
  const { title, body, snippet } = req.body;
  const blog = await Blog.create({ title, body, snippet });
  res.status(200).json({ blog });
};
const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" }); // send json back
    })
    .catch((error) => console.log(error));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_post,
  blog_delete,
};
