import "./CampaignsCard.css";
import {
  FaChartLine,
  FaBullseye,
} from "react-icons/fa";

import { useState, useEffect, useRef } from "react";

const campaignsData = [
  {
    id: 1,
    image:
      "https://vishalakshifoundation.org/wp-content/uploads/2024/07/DSC03149-1-scaled.jpg",
    title: "Sponsor A Child's Education",
    raised: 95000,
    goal: 250000,
    donateLink: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    title: "Food Support For Families",
    raised: 150000,
    goal: 300000,
    donateLink: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    title: "Medical Help For Children",
    raised: 70000,
    goal: 100000,
    donateLink: "#",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=1200&auto=format&fit=crop",
    title: "Clean Water for Rural Villages",
    raised: 45000,
    goal: 120000,
    donateLink: "#",
  },
];

const CampaignsCard = () => {
  const sectionRef = useRef(null);

  const [startAnimation, setStartAnimation] =
    useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setStartAnimation(true);
            }, 200);

            observer.disconnect();
          }
        },
        {
          threshold: 0.35,
        }
      );

      if (sectionRef.current) {
        observer.observe(sectionRef.current);
      }

      return () => observer.disconnect();
    }, []);

  return (
    <section
      className="campaignsCard"
      
    >
      <div className="campaignsCard__container">
        <div className="campaignsCard__headingWrap">
          <div className="campaignsCard__heading-wrap">
            <svg
              className="campaignsCard__blob"
              viewBox="0 0 440 110"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="blobGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#ea580c"
                  />
                  <stop
                    offset="50%"
                    stopColor="#c2410c"
                  />
                  <stop
                    offset="100%"
                    stopColor="#1d4ed8"
                  />
                </linearGradient>
              </defs>

              <path
                d="M30,70 Q10,30 60,20 Q90,5 140,18 Q170,5 220,15 Q270,2 320,18 Q370,8 410,30 Q440,50 420,75 Q410,100 370,95 Q340,108 290,100 Q250,112 200,102 Q160,115 120,100 Q80,110 50,95 Q15,88 30,70 Z"
                fill="url(#blobGrad)"
              />
            </svg>

            <h2 className="campaignsCard__heading">
              Our Campaigns
            </h2>
          </div>

          <p className="campaignsCard__subHeading">
            Every contribution creates hope and
            transforms lives.
          </p>
        </div>

        <div className="campaignsCard__grid" ref={sectionRef}>
          {campaignsData.map((item) => {
            const percentage = Math.min(
              Math.round(
                (item.raised / item.goal) * 100
              ),
              100
            );

            return (
              <div
                className="campaignsCard__card"
                key={item.id}
              >
                <div className="campaignsCard__imageWrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="campaignsCard__image"
                  />

                  <a
                    href={item.donateLink}
                    className="campaignsCard__donateBtn"
                  >
                    ₹ Donate Now
                  </a>
                </div>

                <div className="campaignsCard__content">
                  <h3 className="campaignsCard__title">
                    {item.title}
                  </h3>

                  <div className="campaignsCard__stats">
                    <div className="campaignsCard__stat">
                      <FaChartLine />

                      <span>
                        Raised ₹
                        {item.raised.toLocaleString()}
                      </span>
                    </div>

                    <div className="campaignsCard__stat">
                      <FaBullseye />

                      <span>
                        Goal ₹
                        {item.goal.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="campaignsCard__progressArea">
                    <div className="campaignsCard__progressTop">
                      <span>Progress</span>

                      <span>{percentage}%</span>
                    </div>

                    <div className="campaignsCard__progressBar">
                      <div
                        className="campaignsCard__progressFill"
                        style={{
                          width: startAnimation
                            ? `${percentage}%`
                            : "0%",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CampaignsCard;