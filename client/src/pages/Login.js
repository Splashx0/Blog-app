import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="create-blog content">
      <form method="post" action="/blogs">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" required />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Login</button>
        <div className="signup">
          <p>Haven't signed up yet?</p>
          <Link to="/register">
            <p className="sigtext">SignUp</p>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
