const express = require("express");
const {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
} = require("../controllers/blogController");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.get("/", getBlogs);

router.get("/:id", getBlog);

router.use(requireAuth);

router.post("/", createBlog);

router.delete("/:id", deleteBlog);

module.exports = router;
