"use client";

import "@/styles/contact.css";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          e.target.reset();
        },
        () => {
          alert("❌ Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">

        <h2 className="section-title" style={{ color: "#08afa1" }}>
          Contact Me
        </h2>

        <p className="contact-subtitle">
          🚀 Have a project in mind? Let's build something amazing together.
        </p>

        <form className="contact-form reveal" onSubmit={sendEmail}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
          ></textarea>

          <button type="submit" className="email-btn">
            Send
          </button>

        </form>

      </div>
    </section>
  );
}