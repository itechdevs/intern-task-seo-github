"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label>
        First Name *
        <input name="firstName" required />
      </label>
      <label>
        Last Name *
        <input name="lastName" required />
      </label>
      <label>
        Email *
        <input name="email" type="email" required />
      </label>
      <label>
        Your Message *
        <textarea name="message" rows={5} required />
      </label>
      <button type="submit" className="button">
        Send Message
      </button>
      {sent && (
        <p role="status">
          Thanks! This is a practice form, so nothing was actually sent.
        </p>
      )}
    </form>
  );
}
