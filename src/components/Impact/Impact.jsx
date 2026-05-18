import { useState, useEffect, useRef } from "react";
import "./Impact.css";
import CountUp from "react-countup";

const stats = [
  { icon: "🍽️", value: "2.1",  suffix: "M",  label: "Meals Served",    color: "#FF6B6B", bg: "rgba(255,107,107,0.08)", border: "rgba(255,107,107,0.2)" },
  { icon: "🥛", value: "94645", suffix: "+", label: "Milk Dispensed",   color: "#4ECDC4", bg: "rgba(78,205,196,0.08)",  border: "rgba(78,205,196,0.2)" },
  { icon: "🫶", value: "45000", suffix: "+", label: "Families Aided",   color: "#A78BFA", bg: "rgba(167,139,250,0.08)", border: "rgba(167,139,250,0.2)" },
  { icon: "♻️", value: "8",  suffix: "M+ Kg",  label: "Waste Collected",  color: "#34D399", bg: "rgba(52,211,153,0.08)",  border: "rgba(52,211,153,0.2)" },
  { icon: "🙌", value: "8000",  suffix: "+",  label: "Volunteers",       color: "#F59E0B", bg: "rgba(245,158,11,0.08)",  border: "rgba(245,158,11,0.2)" },
  { icon: "🏙️", value: "19",     suffix: "+",     label: "Cities Reached",   color: "#60A5FA", bg: "rgba(96,165,250,0.08)",  border: "rgba(96,165,250,0.2)" },
  { icon: "💛", value: "2.1",   suffix: "M+",   label: "Lives Touched",    color: "#FB923C", bg: "rgba(251,146,60,0.08)",  border: "rgba(251,146,60,0.2)" },
  { icon: "🌟", value: "50000", suffix: "+",   label: "Youth Inspired",   color: "#E879F9", bg: "rgba(232,121,249,0.08)", border: "rgba(232,121,249,0.2)" },
];

/* ─── Intersection-observer hook ───────────────────────── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* ─── Single stat card ──────────────────────────────────── */
function StatCard({ stat, index, inView }) {
  const [hovered, setHovered] = useState(false);
  const delay = `${index * 80}ms`;

  const cardStyle = {
    transitionDelay: inView ? delay : "0ms",
    background: hovered ? stat.bg : "#fff",
    border: `1.5px solid ${hovered ? stat.border : "rgba(0,0,0,0.07)"}`,
    boxShadow: hovered
      ? `0 16px 40px ${stat.color}22, 0 2px 8px rgba(0,0,0,0.05)`
      : "0 2px 12px rgba(0,0,0,0.05)",
  };
const [animatedValue, setAnimatedValue] = useState(0);

useEffect(() => {
  if (!inView) return;

  let start = 0;
  const end = parseFloat(stat.value);
  const duration = 2000;
  const increment = end / (duration / 16);

  // Determine decimal places from original value
  const decimalPlaces = stat.value.includes('.') 
    ? stat.value.split('.')[1].length 
    : 0;

  // Format number with appropriate decimal places and remove trailing zeros
  const formatNumber = (num) => {
    if (decimalPlaces === 0) {
      return Math.floor(num).toString();
    }
    return parseFloat(num.toFixed(decimalPlaces)).toString();
  };

  const timer = setInterval(() => {
    start += increment;

    if (start >= end) {
      start = end;
      clearInterval(timer);
    }

    setAnimatedValue(formatNumber(start));
  }, 16);

  return () => clearInterval(timer);
}, [inView, stat.value]);
  return (
    <div
      className={`impact-card ${inView ? "impact-card--visible" : "impact-card--hidden"}`}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Glow blob */}
      <div
        className="impact-card__glow"
        style={{ background: stat.color }}
      />

      {/* Bottom accent bar */}
      <div
        className="impact-card__bar"
        style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
      />

      {/* Icon */}
      <div
        className="impact-card__icon"
        style={{ background: stat.bg, border: `1.5px solid ${stat.border}` }}
      >
        {stat.icon}
      </div>

      {/* Value */}
      <div className="impact-card__value" style={{ color: stat.color }}>
       <div
          className="impact-card__value"
          style={{ color: stat.color }}
        >
          {animatedValue}
          {stat.suffix}
        </div>
      </div>

      {/* Label */}
      <div className="impact-card__label">{stat.label}</div>
    </div>
  );
}

/* ─── Main section ──────────────────────────────────────── */
export default function ImpactSection() {
  const [sectionRef, inView] = useInView(0.1);

  return (
    <section className="impact-section" >

      {/* Decorative background blobs */}
      <div className="impact-blob impact-blob--purple" />
      <div className="impact-blob impact-blob--teal" />
      <div className="impact-blob impact-blob--orange" />

      {/* Dot grid */}
      <div className="impact-dots" />

      <div className="impact-inner" ref={sectionRef}>

        {/* Header */}
        <div className={`impact-header ${inView ? "impact-header--visible" : "impact-header--hidden"}`}>
          <div className="impact-badge">
            <span>✦</span> Numbers That Matter
          </div>

          <h2 className="impact-heading">
            Our{" "}
            <span className="impact-heading__gradient">Impact</span>
          </h2>

          <p className="impact-subheading">
            Every number tells a story of change. Here's the difference we've made together.
          </p>
        </div>

        {/* Stats grid */}
        <div className="impact-grid">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        {/* CTA strip */}
        <div className={`impact-cta ${inView ? "impact-cta--visible" : "impact-cta--hidden"}`}>
          <span className="impact-cta__text">Want to be part of the story?</span>
          <button className="impact-cta__btn">Join as a Volunteer →</button>
        </div>

      </div>
    </section>
  );
}