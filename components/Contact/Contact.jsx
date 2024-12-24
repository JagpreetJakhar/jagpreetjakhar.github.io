import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-me">
        <h1 >
          <a href="mailto:jagpreetjakhar94@gmail.com">
            Contact me  
          </a>
        </h1>
        <RiSendPlaneFill size={30} />
      </div>
    </section>
  );
};

export default Contact;
