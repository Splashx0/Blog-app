const express = require("express");
const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/", getBlogs);

router.post("/", createBlog);

router.get("/:id", getBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
