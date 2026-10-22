import React, { useState } from 'react';

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = (firstName + ' ' + lastName).trim();
    const body = `Hi Kowshika,\n\n${message}\n\nFrom: ${fullName} (${email})`;
    const mailtoUrl = `mailto:kowshikanathan@gmail.com?subject=${encodeURIComponent('Portfolio enquiry from ' + fullName)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact">
      <div className="wrap">
        <h2>Get In <b>Touch</b></h2>
        <p className="sub">Let’s work together. Tell me about your project.</p>

        <div className="contact">
          <div className="pic">
            <img
              src="/images/contact-illustration.webp"
              alt="Illustration of Kowshika on a phone call with a new message"
              width="347"
              height="499"
              loading="lazy"
            />
          </div>

          <form id="f" onSubmit={handleSubmit}>
            <div className="row">
              <input
                id="fn"
                placeholder="First name"
                aria-label="First name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                id="ln"
                placeholder="Last name"
                aria-label="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <input
              id="em"
              type="email"
              placeholder="Email address"
              aria-label="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <textarea
              id="ms"
              placeholder="Your message"
              aria-label="Your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="btn b1" type="submit">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
