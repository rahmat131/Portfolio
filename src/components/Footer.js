import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#projects">Projects</a>
        <a href="#contact-me">Contact Me</a>
        <a href="https://www.linkedin.com/in/syedrahmatullah/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://github.com/rahmat131" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="mailto:rahmatdevs131@gmail.com" target="_blank">
          Email
        </a>
        <a href="https://wa.me/4915112300786" target="_blank">
          WhatsApp
        </a>
      </div>
      <p className="footer-copyright">
        © 2024 Syed Rahmat Ullah. All rights reserved.
      </p>
      <p className="footer-statement">
        Crafting solutions, one line of code at a time.
      </p>
    </footer>
  );
};

export default Footer;
