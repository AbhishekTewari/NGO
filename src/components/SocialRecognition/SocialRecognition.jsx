import "../SocialRecognition/SocialRecognition.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const people = [
  {
    name: "John Carter",
    role: "Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Watson",
    role: "Designer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Miller",
    role: "Marketing",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Creator",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "James Brown",
    role: "Developer",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Sophia Lee",
    role: "Creator",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  }
];

function SocialRecognition() {
  return (
    <section className="social-recognition">

      <div className="container">

        <div className="section-header">
          <span className="tag">Social Recognition</span>

          <h2>Recognized By Industry Leaders</h2>

          <p>
            Trusted and appreciated by creators, founders,
            developers, and professionals across different industries.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={6}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >

          {people.map((person, index) => (
            <SwiperSlide key={index}>

              <div className="recognition-card">

                <div className="image-wrapper">
                  <img src={person.image} alt={person.name} />
                </div>

                <h3>{person.name}</h3>

                <span>{person.role}</span>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default SocialRecognition;