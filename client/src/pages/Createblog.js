import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Createblog = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    body: "",
    snippet: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    if (error) {
      setError(null);
    }
    if (success) {
      setSuccess(null);
    }
    const response = await fetch("/api/blogs", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(blogDetails),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    } else {
      setSuccess(data.success);
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setBlogDetails({ ...blogDetails, [name]: value });
  };
  return (
    <div className="create-blog content">
      {console.log(blogDetails)}
      <form method="post" action="/blogs" onSubmit={handleSubmit}>
        <label for="title">Blog title:</label>
        <input type="text" id="title" name="title" onChange={handleChange} />
        <label for="snippet">Blog snippet:</label>
        <input
          type="text"
          id="snippet"
          name="snippet"
          onChange={handleChange}
        />
        <label for="body">Blog body:</label>
        <textarea id="body" name="body" onChange={handleChange}></textarea>
        <button>Submit</button>
        {error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : (
          <p style={{ color: "green" }}>{success}</p>
        )}
      </form>
    </div>
  );
};

export default Createblog;
