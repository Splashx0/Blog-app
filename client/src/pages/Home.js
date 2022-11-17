import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useBlogContext from "../hooks/useBlogContext";

const Home = () => {
  const { blogs, dispatch } = useBlogContext();
  useEffect(() => {
    const fetchBlogs = async () => {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "SET_BLOGS", payload: data.blogs });
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blogs content">
      <h2>All Blogs</h2>

      {blogs &&
        blogs.map((blog) => (
          <Link key={blog._id} to={`blogs/${blog._id}`}>
            <h3 className="title">{blog.title}</h3>
            <div className="sniphost">
              <p className="snippet">{blog.snippet}</p>
              <p className="host"> Posted by {blog?.host?.username}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default Home;
