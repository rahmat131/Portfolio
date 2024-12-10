import React, { useRef, useState } from 'react';
import "./styles.css";
import emailjs from '@emailjs/browser';
// import { useNavigate } from "react-router-dom";

const ContactMe = () => {
  const form = useRef();
  const [popupVisible, setPopupVisible] = useState(false);
  // const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x4b2xqi', 'template_0i3uqfi', form.current, {
        publicKey: 'QwPkadmai5TpriMie',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setPopupVisible(true); // Show the popup
          form.current.reset(); // Clear the form
          setTimeout(() => {
            setPopupVisible(false); // Hide popup
            document.getElementById("landing-page").scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 3000); // Wait 3 seconds before redirection 
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="wrapper-cm">
      <section id="contact-me" className="contact-me">
        <h1>Contact me</h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label id="firstName">Name</label>
          <input type="text" name="firstName" required />
          <label id="email">Email</label>
          <input type="email" name="email" required />
          <label id="comment">Message</label>
          <textarea name="comment" required />
          <button type="submit" value="Send">Submit</button>
        </form>
      </section>

      {/* Popup Notification */}
      {popupVisible && (
        <div className="popup">
          <h3>Bravo!</h3>
          <p>Your message has been sent <span>successfuly.</span></p>
          <p>You will be contacted soon...😊 </p>
        </div>
      )}
    </div>
  );
};

export default ContactMe;
