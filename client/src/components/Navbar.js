import React from "react";
import useAuthContext from "../hooks/useAuthContext";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user, dispatch } = useAuthContext();
  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav>
      <div className="site-title">
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

        {user ? (
          <>
            <li>
              <Link to="/create">New Blog</Link>
            </li>
            <li>
              <p onClick={logout}>LOGOUT</p>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
