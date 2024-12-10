// src/App.js
import React from "react";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
