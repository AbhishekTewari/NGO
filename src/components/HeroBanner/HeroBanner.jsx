import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../HeroBanner/HeroBanner.css";

const slides = [
  {
    id: 1,
    title: "Empowering Communities",
    subtitle: "Together we can create a better future.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    id: 2,
    title: "Support Education",
    subtitle: "Every child deserves quality learning.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
  },
  {
    id: 3,
    title: "Help People in Need",
    subtitle: "Your small contribution changes lives.",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952",
  },
];

const HeroBanner = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        // pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="hero-slider"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="overlay"></div>

              <div className="content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>

                <button>Donate Now</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroBanner;