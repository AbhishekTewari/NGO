import { useState } from "react";
import "./UpcomingEvent.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const events = [
  {
    id: 1,
    title: "Free Health Camp",
    category: "Health",
    date: "25 May 2026",
    location: "Gurgaon, Haryana",
    description:
      "Free medical checkups for children and elderly people in underprivileged communities.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Food Distribution Drive",
    category: "Food",
    date: "2 June 2026",
    location: "Delhi NCR",
    description:
      "We distribute freshly cooked meals to homeless families.",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Education Awareness Workshop",
    category: "Education",
    date: "10 June 2026",
    location: "Noida, UP",
    description:
      "Helping children understand the importance of education.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Eye Checkup Camp",
    category: "Health",
    date: "15 June 2026",
    location: "Faridabad",
    description:
      "Free eye screening and treatment for rural communities.",
    image:
      "https://images.unsplash.com/photo-1581595219315-a187dd40c322?q=80&w=1200&auto=format&fit=crop",
  },
];

const categories = ["All", "Health", "Education", "Food"];

const UpcomingEvents = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredEvents =
    activeCategory === "All"
      ? events
      : events.filter((e) => e.category === activeCategory);

  return (
    <section className="eventsSection">
      <div className="eventsContainer">

        {/* HEADER */}
        <div className="eventsHeader">
          <h2>Upcoming<span className="upcoming-event-header"> Events</span></h2>
          <p>Join us in making real social impact.</p>
        </div>

        {/* FILTER */}
        <div className="eventFilters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filterBtn ${
                activeCategory === cat ? "active" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* SWIPER */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={25}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {filteredEvents.map((event) => (
            <SwiperSlide key={event.id}>
              <EventCard event={event} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

/* CARD COMPONENT */
const EventCard = ({ event }) => {
  return (
    <div className="eventCard">
      <div className="eventImageWrap">
        <img src={event.image} alt={event.title} />

        <div className="eventBadge">{event.category}</div>
        <div className="eventDate">{event.date}</div>
      </div>

      <div className="eventContent">
        <h3>{event.title}</h3>

        <p className="eventLocation">📍 {event.location}</p>

        <p className="eventDesc">{event.description}</p>

        <button className="eventBtn">Register Now</button>
      </div>
    </div>
  );
};

export default UpcomingEvents;