import React from 'react';
import './Navbar.css'; 
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <span className="site-name">Urban Haven</span>
      </div>
      <div className="navbar-right">
        <button className="nav-btn">Register</button>
        <button className="nav-btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;
