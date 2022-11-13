import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div class="site-title">
        <Link to="/">
          <h1>Blog</h1>
        </Link>
        <p>Write Anything</p>
      </div>
      <ul>
        <li>
          <Link to="/">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/create">New Blog</Link>
        </li>
        <li>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
