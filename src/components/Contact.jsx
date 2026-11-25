import React, { useState } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone, Send } from 'lucide-react';
import ScrollVideo from './ScrollVideo';
import './Contact.css';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kowshika-s-5b744a214/',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/kowshikanathan',
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/sweetyak',
  },
];

export default function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedFirst = firstName.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedFirst || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: 'error',
        text: 'Please complete your first name, email address, and message before sending.',
      });
      return;
    }

    const fullName = `${trimmedFirst} ${lastName.trim()}`.trim();
    const body = `Hi Kowshika,\n\n${trimmedMessage}\n\nFrom: ${fullName} (${trimmedEmail})`;
    const mailtoUrl = `mailto:kowshikanathan@gmail.com?subject=${encodeURIComponent(
      `Portfolio enquiry from ${fullName}`
    )}&body=${encodeURIComponent(body)}`;

    setStatus({
      type: 'success',
      text: 'Opening your email client with your message ready to send.',
    });
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="scene-section contact-section">
      <div className="scene-divider" aria-hidden="true" />

      <div className="container contact-grid">
        {/* Left Column (45%): Large Vertical Cinematic Character + Minimal Contact Info */}
        <div className="contact-left-col">
          <div className="contact-vertical-stage">
            <ScrollVideo
              src="/videos/sitting.mp4"
              poster="/videos/posters/sitting.jpg"
              fallbackPoster="/videos/posters/sitting-end.jpg"
              mode="scroll"
              aspectRatio="4 / 5"
              fit="cover"
              objectPosition="50% 50%"
              seamless={true}
              className="contact-vertical-video"
              ariaLabel="3D character of Kowshika seated comfortably in a white chair in warm studio light"
            />
          </div>

          <div className="contact-info-block" data-reveal>
            <div className="contact-direct-lines">
              <div className="contact-info-item">
                <MapPin size={15} className="contact-info-icon" aria-hidden="true" />
                <span>Bengaluru, India</span>
              </div>

              <a href="tel:+919361308305" className="contact-info-item contact-info-link">
                <Phone size={15} className="contact-info-icon" aria-hidden="true" />
                <span>+91-9361308305</span>
              </a>

              <a
                href="mailto:kowshikanathan@gmail.com"
                className="contact-info-item contact-info-link"
              >
                <Mail size={15} className="contact-info-icon" aria-hidden="true" />
                <span>kowshikanathan@gmail.com</span>
              </a>
            </div>

            <div className="contact-social-row" aria-label="Social links">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-social-link"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column (55%): Conversational Heading + Functional Contact Form */}
        <div className="contact-right-col">
          <div className="scene-kicker" data-reveal>
            <span className="scene-kicker-dot" aria-hidden="true" />
            <span>06 — Contact</span>
          </div>

          <h2 className="scene-heading" data-reveal data-reveal-delay="0.06">
            Let&apos;s Create Something <span className="accent-word">Great.</span>
          </h2>

          <p className="scene-lead contact-lead" data-reveal data-reveal-delay="0.12">
            Open to UX/UI Designer roles, product collaborations, and thoughtful digital
            experiences. Drop a note or reach out directly.
          </p>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
            data-reveal
            data-reveal-delay="0.16"
          >
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="fn">First name</label>
                <input
                  id="fn"
                  type="text"
                  placeholder="First name"
                  required
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (status) setStatus(null);
                  }}
                />
              </div>
              <div className="contact-field">
                <label htmlFor="ln">Last name</label>
                <input
                  id="ln"
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="em">Email address</label>
              <input
                id="em"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status) setStatus(null);
                }}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="ms">Message</label>
              <textarea
                id="ms"
                rows={4}
                placeholder="Tell me about your team, role, or project..."
                required
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (status) setStatus(null);
                }}
              />
            </div>

            {status && (
              <p
                className={`contact-form-status ${
                  status.type === 'error' ? 'is-error' : 'is-success'
                }`}
                role="status"
                aria-live="polite"
              >
                {status.text}
              </p>
            )}

            <div className="contact-submit-row">
              <button type="submit" className="btn-primary">
                <Send size={16} />
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
