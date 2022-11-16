import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
const Blogdetails = () => {
  const { id } = useParams();
  const { user } = useAuthContext;
  const [blog, setBlog] = useState([]);
  const fetchBlog = async () => {
    const response = await fetch(`/api/blogs/${id}`, {
      headers: { "Content-Type": "json" },
    });
    const data = await response.json();
    setBlog(data.blog);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleDelete = async () => {
    const response = await fetch(`/api/blogs/${id}`, {
      headers: {
        Authorization: `Bearer ${user?.token}`,
      },
      method: "DELETE",
    });
    const data = await response.json();
  };

  return (
    <div className="details content">
      <div>
        <h2>{blog?.title}</h2>
      </div>
      <p>By {blog.host?.username}</p>
      <div className="content">
        <p>{blog.body}</p>
      </div>
      <div className="delete" onClick={handleDelete}>
        delete
      </div>
    </div>
  );
};

export default Blogdetails;
