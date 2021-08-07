import React from "react";
import logo from "../assets/startup.png"

const Navbar: React.FC = () => {
  return (
    
     <nav className="navbar">
         <a href="#home"> <img src={logo} alt="logo"className="navbar-logo" /></a>

         <ul className="nav-links">
             <li><a href="#app-section" >App</a></li>
             <li><a href="#why-startup-section">Why Startup</a></li>
             <li><a href="#about-section">About</a></li>
             <li><a href="#plan-section">Plans</a></li>
             <li><a href="#support-section">Support</a></li>
         </ul>

         <div className="open-btn btn">
             <a href="#app-section">Open Startup</a>
         </div>
     </nav>
    
  );
};

export default Navbar;
