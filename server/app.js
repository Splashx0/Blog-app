const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");

//connect to mongo
//const dbURI = "mongodb+srv://splash:splash@blog.msufnqt.mongodb.net/blogdb";
const dbURI2 = "mongodb://localhost:27017/blog";
//asynchrenous
mongoose
  .connect(dbURI2)
  .then((result) => app.listen(8000))
  .catch((err) => console.log(err));

//middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use(morgan("dev"));

// routes
app.use("/api/blogs", blogRoutes);
app.use("/api/user", authRoutes);
