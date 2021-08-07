import React from "react";
import Logo from "../assets/startup.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top footer-nav">
        <a href="/">
          <img src={Logo} alt="footer-logo" className="footer-logo" />
        </a>
      </div>
      <div className="footer-bottom footer-nav">
        <p>STARTUP LICENSING &copy; ALL RIGHTS RESERVED 2021</p>
        <ul className="footer-links">
            <li>
                <a href="/">Privacy Policy</a>
            </li>
            <li>
                <a href="/">Cookie Policy</a>
            </li>
            <li>
                    <a href="/">Terms of Use</a>
            </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
