import React from "react";
import "./About.css";  // Import the CSS file
import FeryAle from '../Assets/Tengah_Hutan.png'
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
      <div class="team">
        <h1>Our<span>Team</span></h1>

        <div class="team_box">
            <div class="profile">
                <img src={FeryAle} alt="Fery Ale Lesmana"/>

                <div class="info">
                    <h2 class="name">Fery Ale Lesmana</h2>
                    <p class="bio">Backend Developer</p>

                    <div class="team_icon">
                        <a href="https://web.facebook.com/">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://web.twitter.com/">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>

                </div>

            </div>

            <div class="profile">
                <img src="image/chef2.png"/>

                <div class="info">
                    <h2 class="name">Rizky Hidayatullah</h2>
                    <p class="bio">Lulusan German</p>

                    <div class="team_icon">
                        <a href="https://web.facebook.com/">
                	        <i class="fa-brands fa-facebook-f"></i>
			                 </a>
			                  <a href="https://web.twitter.com/">
                	        <i class="fa-brands fa-twitter"></i>
			                  </a>
			                  <a href="https://www.instagram.com/">
                	        <i class="fa-brands fa-instagram"></i>
			                  </a>
                    </div>

                </div>

            </div>

            <div class="profile">
                <img src="image/chef3.jpg"/>

                <div class="info">
                    <h2 class="name">Ramlan Kusuma</h2>
                    <p class="bio">Lulusan Indonesia</p>
                    <div class="team_icon">
                        <a href="https://web.facebook.com/">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://web.twitter.com/">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div class="profile">
                <img src="image/chef4.jpg"/>
                <div class="info">
                    <h2 class="name">Nabila</h2>
                    <p class="bio">Universitas pamulang</p>
                    <div class="team_icon">
                        <a href="https://web.facebook.com/">
                          <i class="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="https://web.twitter.com/">
                          <i class="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.instagram.com/">
                          <i class="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
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
