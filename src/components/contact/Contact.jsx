import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_c6b1w02",
      "template_dyleirj",
      form.current,
      "Kdui_wTgPZx5EjXpi"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gamingiq61@gmail.com</h5>
            <a href="mailto:gamingiq61@gmail.com">Send an email</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>Saboor Ahmad Bhat</h5>
            <a href="https://wa.me/916005093921">Chat on whatsapp</a>
          </article>
          <article className="contact__option">
            <FiSmartphone className="contact__option-icon" />
            <h4>Phone</h4>
            <h5>+916005094196</h5>
            <a href="tel:+916005093921">Call me</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
