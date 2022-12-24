import React from "react";
import "../styles/herostyle.css";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <section className="main">
        <Link to="/space-history">
          <h5 className="title" data-aos="fade-up" data-aos-delay="600">
            Click here to see the SpaceX History
          </h5>
        </Link>
        <Link to="/space-address">
          <h5 className="title" data-aos="fade-up" data-aos-delay="600">
            Click here to see the SpaceX Address
          </h5>
        </Link>

        <p className="description" data-aos="fade-up" data-aos-delay="1000">
          The most powerful operational rocket in the world by a factor of two
        </p>
      </section>
      <img
        src="https://ahmadhassan7.github.io/SpaceX/video/poster.jpg"
        alt=""
      />
      <img
        src="https://ahmadhassan7.github.io/SpaceX/img/rocket.png"
        alt="rocket"
        class="rocket"
        data-rellax-speed="12"
      ></img>
    </div>
  );
};

export default HeroSection;
