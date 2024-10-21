import React from 'react';
import useSlideIn from '../hooks/useSlideIn';

const HeroSection = () => {
  const slideInRef = useSlideIn(); // Gunakan custom hook

  return (
    <section ref={(el) => (slideInRef.current[0] = el)} className="hero slide-in">
      <div className="hero-content">
        <h1>Innovating Games, Inspiring Dreams</h1>
        <p>Discover immersive experiences, crafted with passion and creativity.</p>
        <a href="#games" className="cta-button">Explore Our Games</a>
      </div>
    </section>
  );
};

export default HeroSection;
