import React, { useRef } from "react";
import "./Contact.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ls01xw",
        "template_paz2c1q",
        form.current,
        "B8dSDNHoBhXJCXTLG"
      )
      .then(() => {
        alert("Message Sent Successfully 🚀");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message ❌");
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <h1>Contact Me</h1>
        <p>Let's build something amazing together.</p>
      </div>

      <div className="contact-container">

        {/* Left Side */}
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>

          <p>
            I'm always open to discussing new projects,
            creative ideas, freelance work, or job
            opportunities.
          </p>

          <div className="contact-item">
            <FaEnvelope />
            <span>mahimandal8617@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaGithub />
            <a
              href="https://github.com/Maheswar15322"
              target="_blank"
              rel="noreferrer"
            >
              github.com/Maheswar15322
            </a>
          </div>

          <div className="contact-item">
            <FaLinkedin />
            <a
              href="https://linkedin.com/in/MaheswarMandal"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/MaheswarMandal
            </a>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;