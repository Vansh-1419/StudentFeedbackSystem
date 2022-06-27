import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-list">Docs</div>
        <div className="navbar-list">login</div>
      </div>
    </>
  );
};
export default Navbar;
