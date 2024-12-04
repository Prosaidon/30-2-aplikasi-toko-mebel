import React from "react";
import "./About.css";  // Import the CSS file

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our application! This platform is designed to provide
        valuable information and services to our users. Our mission is to
        deliver a seamless and user-friendly experience for everyone.
      </p>
      <h2>Our Vision</h2>
      <p>
        We aim to become a trusted source of knowledge and innovation in the
        field, empowering individuals to achieve their goals through our
        platform.
      </p>
      <h2>Our Team</h2>
      <p>
        Our team consists of passionate individuals committed to delivering
        high-quality solutions. Together, we work tirelessly to improve and
        expand our services.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, feel free to reach out to us at{" "}
        <a href="mabelify@gmail.com">mabelify@gmail.com</a>.
      </p>
    </div>
  );
};

export default About;
