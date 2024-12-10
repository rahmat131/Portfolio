// src/components/ContactMe.js
import React from "react";
import "./styles.css";

const ContactMe = () => {
  return (
    <div className="wrapper-cm">
    <section id="contact-me" className="contact-me">
      <h1>Contact me</h1>
      <form className="contact-form">
        <label id= "name">Name</label>
        <input type="text" name="name" required />
        <label id= "name">Email</label>
        <input type="email" name="email" required />
        <label id= "name">Message</label>
        <textarea name="message"  required />
        <button type="submit">Submit</button>
      </form>
    </section>
    </div>
  );
};

export default ContactMe;
