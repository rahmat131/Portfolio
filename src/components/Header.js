import React, { useState } from "react";
import "./styles.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header-left">
        <a href="https://www.linkedin.com/in/syedrahmatullah/" target="_blank">
          <img src="/icons/Linked.png" alt="LinkedIn" />
        </a>
        <a href="https://github.com/rahmat131" target="_blank">
          <img src="/icons/GHub.png" alt="GitHub" />
        </a>
        <a href="mailto:rahmatdevs131@gmail.com" target="_blank">
          <img src="/icons/E_Mail.png" alt="Email" />
        </a>
      </div>
      <div className={`header-right ${menuOpen ? "active" : ""}`}>
        <a href="#projects">Projects</a>
        <a href="#contact-me">Contact Me</a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;
