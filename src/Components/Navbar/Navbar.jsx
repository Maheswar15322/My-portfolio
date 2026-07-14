import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import menu_icon from "../../assets/menu_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="logo-img" />

      <div className="menu-icon" onClick={() => setMenu(!menu)}>
        {menu ? (
          <FaTimes />
        ) : (
          <img src={menu_icon} alt="Menu" className="hamburger-img" />
        )}
      </div>

      <ul className={`nav-menu ${menu ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={() => setMenu(false)}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={() => setMenu(false)}>
            About Me
          </a>
        </li>

        <li>
          <a href="#services" onClick={() => setMenu(false)}>
            Services
          </a>
        </li>

        <li>
          <a href="#projects" onClick={() => setMenu(false)}>
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" onClick={() => setMenu(false)}>
            Contact
          </a>
        </li>

        <li className="mobile-btn">
          <a href="#contact" onClick={() => setMenu(false)}>
            Connect With Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
