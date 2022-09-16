import React, { useContext } from "react";
import { BlogContext } from "../../contexts/BlogContext";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const { blogs } = useContext(BlogContext);
  return (
    <div className="top">
      <div className="topLeft">
        <p>Total Blogs : {blogs.length} </p>
      </div>
      <div className="topCenter">{/* <h3>Blogging App</h3> */}</div>
      <div className="topRight">
        <Link className="link" to="/">
          <button variant="outline-dark" className="writeSubmit">
            Home
          </button>
        </Link>

        <Link className="link" to="/add">
          <button variant="outline-dark" className="home">
            Add Blog
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
