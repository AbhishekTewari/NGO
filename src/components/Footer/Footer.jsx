import { useState } from "react";
import "./Footer.css";

const quickLinks = [
  { label: "About Us", href: "#about" },
  { label: "Our Mission", href: "#mission" },
  { label: "Impact Report", href: "#impact" },
  { label: "Press & Media", href: "#press" },
  { label: "Careers", href: "#careers" },
];

const programs = [
  { label: "Food For All", href: "#food" },
  { label: "Education Drive", href: "#education" },
  { label: "Clean Water", href: "#water" },
  { label: "Women Empowerment", href: "#women" },
  { label: "Disaster Relief", href: "#relief" },
];

const getInvolved = [
  { label: "Donate Now", href: "#donate" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Fundraise", href: "#fundraise" },
  { label: "Partner With Us", href: "#partner" },
  { label: "Corporate CSR", href: "#csr" },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "Twitter",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.36-1.85c3.6 0 4.27 2.37 4.27 5.45zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-5.8zM9.6 15.6V8.4l6.3 3.6z" />
      </svg>
    ),
  },
];

function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3500);
  };

  return (
    <footer className="footer">
      {/* Decorative background blobs */}
      <div className="footer__blob footer__blob--violet" />
      <div className="footer__blob footer__blob--teal" />
      <div className="footer__blob footer__blob--orange" />

      {/* Top gradient divider */}
      <div className="footer__divider" aria-hidden="true" />

      <div className="footer__inner">
        {/* Newsletter glass panel */}
        <div className="footer__newsletter">
          <div className="footer__newsletter-text">
            <span className="footer__tag">
              <span className="footer__tag-dot" /> Stay Connected
            </span>
            <h2 className="footer__newsletter-title">
              Join the movement.{" "}
              <span className="footer__gradient-text">Get our newsletter.</span>
            </h2>
            <p className="footer__newsletter-sub">
              Monthly stories from the field, impact updates, and ways you can help —
              straight to your inbox. No spam, ever.
            </p>
          </div>

          <form className="footer__form" onSubmit={handleSubscribe}>
            <div className="footer__input-wrap">
              <svg
                className="footer__input-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-label="Email address"
              />
            </div>
            <button type="submit" className="footer__btn">
              {subscribed ? "✓ Subscribed" : "Subscribe"}
              <span className="footer__btn-shine" />
            </button>
          </form>
        </div>

        {/* Main grid */}
        <div className="footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <a href="#" className="footer__logo">
              <span className="footer__logo-mark">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </span>
              <span className="footer__logo-text">HopeOrg</span>
            </a>

            <p className="footer__about">
              We build bridges between compassion and action — empowering
              communities, protecting the planet, and giving every child a fair
              shot at a better tomorrow.
            </p>

            <div className="footer__contact">
              <div className="footer__contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>221B Hope Street, New Delhi, India</span>
              </div>
              <div className="footer__contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <a href="tel:+911234567890">+91 12345 67890</a>
              </div>
              <div className="footer__contact-row">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <a href="mailto:hello@hopeorg.in">hello@hopeorg.in</a>
              </div>
            </div>
          </div>

          {/* Link columns */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>
                    <span className="footer__link-arrow">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Our Programs</h4>
            <ul className="footer__links">
              {programs.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>
                    <span className="footer__link-arrow">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Get Involved</h4>
            <ul className="footer__links">
              {getInvolved.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>
                    <span className="footer__link-arrow">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__copy">
            © {new Date().getFullYear()} <span>HopeOrg</span>. Crafted with care for
            a kinder world.
          </p>

          <div className="footer__socials" aria-label="Social media">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="footer__social"
                aria-label={s.label}
              >
                {s.svg}
              </a>
            ))}
          </div>

          <ul className="footer__legal">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#cookies">Cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
