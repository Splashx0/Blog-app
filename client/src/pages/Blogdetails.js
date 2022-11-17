import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import useBlogContext from "../hooks/useBlogContext";
const Blogdetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { dispatch } = useBlogContext();
  const [blog, setBlog] = useState();
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const fetchBlog = async () => {
    const response = await fetch(`/api/blogs/${id}`, {
      headers: { "Content-Type": "json" },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    }
    setBlog(data.blog);
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  const handleDelete = async () => {
    if (!user) {
      return;
    }
    if (user.username !== blog.host.username) {
      return;
    }
    const response = await fetch("/api/blogs/" + id, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      setSuccess(data.success);
      dispatch({ type: "DELETE_BLOG", payload: blog._id });
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };
  return (
    <div className="details content">
      <div>
        <h2>{blog?.title}</h2>
      </div>
      <p>By {blog?.host?.username}</p>
      <div className="content">
        <p>{blog?.body}</p>
      </div>
      <div className="delete" onClick={handleDelete}>
        delete
      </div>
      {error && <div className="error">{error}</div>}
      {success && <div className="success">{success}</div>}
    </div>
  );
};

export default Blogdetails;
