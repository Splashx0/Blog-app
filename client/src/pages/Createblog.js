import React, { useEffect, useState } from "react";

const Createblog = () => {
  const [blogDetails, setBlogDetails] = useState({
    title: "",
    body: "",
    snippet: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
    const response = await fetch("/api/blogs", {
      method: "POST",
      body: JSON.stringify(blogDetails),
    });
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setBlogDetails({ ...blogDetails, [name]: value });
  };
  return (
    <div className="create-blog content">
      <form method="post" action="/blogs" onSubmit={handleSubmit}>
        <label for="title">Blog title:</label>
        <input
          type="text"
          id="title"
          name="title"
          required
          onChange={handleChange}
        />
        <label for="snippet">Blog snippet:</label>
        <input
          type="text"
          id="snippet"
          name="snippet"
          required
          onChange={handleChange}
        />
        <label for="body">Blog body:</label>
        <textarea
          id="body"
          name="body"
          required
          onChange={handleChange}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Createblog;
