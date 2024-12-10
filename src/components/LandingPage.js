// src/components/LandingPage.js
import React from "react";
import "./styles.css";
import dp from "./img/finaldp2black.png"

const LandingPage = () => {
  return (
    <section id="landing-page" className="landing-page">
      <img src={dp} alt="DP" className="project-image" />
      <h1 className="first">Hello, I am Rahmat!</h1>
      <h1 className="second">A frontend developer specialized in React</h1>
    </section>
  );
};

export default LandingPage;
