import React from 'react';
import './Hero.css';
import heroImage from '../Assets/hero_image.png'; // Perbaikan nama variabel impor

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-tagline">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-words">
          <p>NEW</p>
          <p>COLLECTIONS</p>
          <p>FOR</p>
          <p>EVERYONE</p>
        </div>
      </div>
      <img src={heroImage} alt="" /> {/* Menggunakan variabel yang diimpor */}
    </div>
  );
};

export default Hero;
