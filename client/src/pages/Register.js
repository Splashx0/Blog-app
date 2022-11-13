import React from "react";

const Register = () => {
  return (
    <div className="create-blog content">
      <form method="post" action="/blogs">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required />
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
