import React from "react";
import {Logo} from "../assets/Media"

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <input type="checkbox" id="nav-toogle" />
      <a href="#home">
        {" "}
        <img src={Logo} alt="logo" className="navbar-logo" />
      </a>

      <ul className="nav-links">
        <li>
          <a href="#app-section">App</a>
        </li>
        <li>
          <a href="#why-startup-section">Why Startup</a>
        </li>
        <li>
          <a href="#about-section">About</a>
        </li>
        <li>
          <a href="#plan-section">Plans</a>
        </li>
        <li>
          <a href="#support-section">Support</a>
        </li>
      </ul>

      <div className="open-btn btn">
        <a href="#app-section">Open Startup</a>
      </div>

      <label htmlFor="nav-toogle" className="icon-burger">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </label>
    </nav>
  );
};

export default Navbar;
