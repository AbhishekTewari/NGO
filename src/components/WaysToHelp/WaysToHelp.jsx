import { useEffect, useRef, useState } from "react";
import "./WaysToHelp.css";

const cards = [
  {
    key: "donate",
    badge: "Give",
    title: "Donate",
    description:
      "Every rupee fuels a meal, a textbook, a roof. Make a one-time gift or become a monthly hero — 100% transparent, 80G tax-exempt.",
    cta: "Donate Now",
    href: "#donate",
    accent: "#ef4444",
    accentSoft: "rgba(239, 68, 68, 0.10)",
    accentBorder: "rgba(239, 68, 68, 0.22)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    stat: "₹2.4Cr+ raised",
  },
  {
    key: "csr",
    badge: "Partner",
    title: "Corporate CSR",
    description:
      "Align your brand with measurable social impact. Co-create programs, sponsor schools, fund clean-water drives — and receive detailed impact reporting.",
    cta: "Donate Now",
    href: "#csr",
    accent: "#6366f1",
    accentSoft: "rgba(99, 102, 241, 0.10)",
    accentBorder: "rgba(99, 102, 241, 0.22)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" />
        <path d="M9 12v.01" />
        <path d="M9 15v.01" />
        <path d="M9 18v.01" />
      </svg>
    ),
    stat: "120+ companies",
  },
  {
    key: "volunteer",
    badge: "Act",
    title: "Volunteer",
    description:
      "Lend your skills, time, and energy. Teach, build, mentor, design — there's a place for every passion in our network of 8,000+ changemakers.",
    cta: "Join the Mission",
    href: "#volunteer",
    accent: "#10b981",
    accentSoft: "rgba(16, 185, 129, 0.10)",
    accentBorder: "rgba(16, 185, 129, 0.22)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    stat: "8,000+ volunteers",
  },
];

function WaysToHelp() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="wth" ref={sectionRef}>
      {/* Decorative shapes */}
      <div className="wth__shape wth__shape--pink" aria-hidden="true" />
      <div className="wth__shape wth__shape--blue" aria-hidden="true" />
      <div className="wth__shape wth__shape--green" aria-hidden="true" />
      <div className="wth__grid" aria-hidden="true" />

      <div className={`wth__inner ${inView ? "is-visible" : ""}`}>
        {/* Header */}
        <div className="wth__header">
          <span className="wth__tag">
            <span className="wth__tag-dot" />
            Be the Change
          </span>

          <h2 className="wth__heading">
            Three ways to{" "}
            <span className="wth__heading-accent">
              make a difference
              <svg
                className="wth__underline"
                viewBox="0 0 280 14"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9 Q 80 1, 140 7 T 277 5"
                  stroke="url(#wthGrad)"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="wthGrad" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h2>

          <p className="wth__sub">
            Whether you give, partner, or roll up your sleeves — every action
            ripples outward. Choose your path and let's build a kinder tomorrow,
            together.
          </p>
        </div>

        {/* Cards */}
        <div className="wth__grid-cards">
          {cards.map((card, i) => (
            <article
              key={card.key}
              className="wth__card"
              style={{
                "--accent": card.accent,
                "--accent-soft": card.accentSoft,
                "--accent-border": card.accentBorder,
                "--delay": `${i * 120}ms`,
              }}
            >
              {/* Floating gradient orb */}
              <div className="wth__card-orb" aria-hidden="true" />

              {/* Badge */}
              <span className="wth__card-badge">{card.badge}</span>

              {/* Icon */}
              <div className="wth__card-icon">
                <div className="wth__card-icon-bg" aria-hidden="true" />
                {card.icon}
              </div>

              {/* Text */}
              <h3 className="wth__card-title">{card.title}</h3>
              <p className="wth__card-desc">{card.description}</p>

              {/* Stat pill */}
              <div className="wth__card-stat">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {card.stat}
              </div>

              {/* CTA */}
              <a href={card.href} className="wth__card-link">
                {card.cta}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="wth__cta-strip">
          <div className="wth__cta-text">
            <h3>Ready to take the first step?</h3>
            <p>Pick what fits you best — every contribution moves the needle.</p>
          </div>
          <div className="wth__cta-actions">
            <a href="#donate" className="wth__btn wth__btn--primary">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              Donate
              <span className="wth__btn-shine" />
            </a>
            <a href="#join" className="wth__btn wth__btn--ghost">
              Join Us
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WaysToHelp;
