import {
  FaCalendarAlt,
  FaBookOpen,
  FaHandHoldingHeart,
  FaPaw,
} from "react-icons/fa";

import { GiMeal } from "react-icons/gi";
import "./Compaigns.css";

const Compaigns = () => {
  return (
    <div className="compaign-wrap">
      <h2 className="compaign-heading">Our Campaigns</h2>

      <p className="compaign-sub-head">
        Causes you can support
      </p>

      <div className="compaign-cards">
        <div className="compaign-card">
          <div className="compaign-icon">
            <FaCalendarAlt />
          </div>

          <h3>SPECIAL EVENTS</h3>
        </div>

        <div className="compaign-card">
          <div className="compaign-icon">
            <FaBookOpen />
          </div>

          <h3>EDUCATION</h3>
        </div>

        <div className="compaign-card">
          <div className="compaign-icon">
            <GiMeal />
          </div>

          <h3>HUNGER</h3>
        </div>

        <div className="compaign-card">
          <div className="compaign-icon">
            <FaHandHoldingHeart />
          </div>

          <h3>GENEROSITY</h3>
        </div>

        <div className="compaign-card">
          <div className="compaign-icon">
            <FaPaw />
          </div>

          <h3>ANIMALS</h3>
        </div>
      </div>
    </div>
  );
} 

export default Compaigns;