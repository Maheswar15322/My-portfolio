import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <h3>M.M Portfolio</h3>

      <p>
        Frontend Developer | React Developer
      </p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <p className="copyright">
        © 2026 M.M. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;