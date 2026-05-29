import { useState, useEffect, useRef } from "react";
import "./CinematicVideo.css";

const VIDEO_ID = "ZXsQAXx_ao0"; // motivational placeholder — easy to swap

function CinematicVideo() {
  const [playing, setPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

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

  const thumbnail = `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`;

  return (
    <section className="cinema" ref={sectionRef}>
      {/* Decorative background */}
      <div className="cinema__grid" aria-hidden="true" />
      <div className="cinema__blob cinema__blob--gold" />
      <div className="cinema__blob cinema__blob--violet" />
      <div className="cinema__noise" aria-hidden="true" />

      <div className={`cinema__inner ${inView ? "is-visible" : ""}`}>
        {/* Top eyebrow */}
        <div className="cinema__eyebrow">
          <span className="cinema__eyebrow-line" />
          <span className="cinema__eyebrow-text">A Story Worth Watching</span>
          <span className="cinema__eyebrow-line" />
        </div>

        {/* Heading */}
        <h2 className="cinema__heading">
          A Man Who{" "}
          <span className="cinema__heading-accent">
            Dreamed
            <svg
              className="cinema__underline"
              viewBox="0 0 220 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 Q 60 0, 110 6 T 218 4"
                stroke="url(#cinemaGrad)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="cinemaGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#f97316" />
                </linearGradient>
              </defs>
            </svg>
          </span>{" "}
          Beyond Limits
        </h2>

        {/* Subheading */}
        <p className="cinema__sub">
          Success begins with a vision, discipline, and the courage to continue
          when others stop.
        </p>

        {/* Video card */}
        <div className="cinema__stage">
          {/* Glow rings */}
          <div className="cinema__ring cinema__ring--1" aria-hidden="true" />
          <div className="cinema__ring cinema__ring--2" aria-hidden="true" />

          <div className="cinema__card">
            {/* Gradient border layer */}
            <div className="cinema__card-border" aria-hidden="true" />

            <div className="cinema__player">
              {playing ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                  title="A Man Who Dreamed Beyond Limits"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <button
                  type="button"
                  className="cinema__play-wrap"
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                >
                  <img
                    src={thumbnail}
                    alt="A Man Who Dreamed Beyond Limits"
                    className="cinema__thumb"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`;
                    }}
                  />
                  <div className="cinema__thumb-overlay" />

                  {/* Play button */}
                  <div className="cinema__play">
                    <div className="cinema__play-pulse" />
                    <div className="cinema__play-pulse cinema__play-pulse--delay" />
                    <div className="cinema__play-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom caption strip */}
                  <div className="cinema__caption">
                    <div className="cinema__caption-text">
                      <span className="cinema__caption-dot" />
                      Watch the Journey
                    </div>
                    <div className="cinema__caption-time">▶ 4:32 min</div>
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Corner brackets — cinema framing */}
          <span className="cinema__bracket cinema__bracket--tl" aria-hidden="true" />
          <span className="cinema__bracket cinema__bracket--tr" aria-hidden="true" />
          <span className="cinema__bracket cinema__bracket--bl" aria-hidden="true" />
          <span className="cinema__bracket cinema__bracket--br" aria-hidden="true" />
        </div>

        {/* Quote strip */}
        <blockquote className="cinema__quote">
          <span className="cinema__quote-mark">“</span>
          The dream doesn't end when you fall — it ends only when you decide to
          stay down.
          <span className="cinema__quote-mark cinema__quote-mark--end">”</span>
        </blockquote>
      </div>
    </section>
  );
}

export default CinematicVideo;
