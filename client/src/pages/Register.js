import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
const Register = () => {
  const { dispatch } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [userDetails, setUserDetails] = useState({
    email: "",
    username: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.target.reset();
    e.preventDefault();
    if (error) {
      setError(null);
    }
    if (success) {
      setSuccess(null);
    }
    const response = await fetch("/api/user/register", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(userDetails),
    });
    const data = await response.json();
    if (!response.ok) {
      setError(data.error);
    } else {
      setSuccess(data.success);
      localStorage.setItem("user", JSON.stringify(data));
      dispatch({ type: "LOGIN", payload: data });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setUserDetails({ ...userDetails, [name]: value });
  };
  return (
    <div className="create-blog content">
      {console.log(userDetails)}
      <form onSubmit={handleSubmit}>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" onChange={handleChange} />
        <label for="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={handleChange}
        />
        <label for="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">Register</button>
        {error ? (
          <p style={{ color: "red", padding: "0" }}>{error}</p>
        ) : (
          <p style={{ color: "green" }}>{success}</p>
        )}
      </form>
    </div>
  );
};

export default Register;
