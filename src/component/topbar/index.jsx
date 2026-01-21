import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";
const TopBar = () => {
  return (
    <div className="mainBox">
      <div className="itemSection">
        <NavLink to="/" className="navigation">
          Home
        </NavLink>
        <NavLink to="menu-summary" className="navigation">
          Order
        </NavLink>
        <NavLink to="about" className="navigation">
          About
        </NavLink>
        <NavLink to="profile" className="navigation">
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default TopBar;
