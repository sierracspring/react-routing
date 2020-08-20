import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="nav-bar-container">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/explore">Explore</NavLink>
      <NavLink to="/notifications">Notifications</NavLink>
    </div>
  );
}

export default NavBar;
