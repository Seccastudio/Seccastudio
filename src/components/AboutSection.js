import React from 'react';
import useSlideIn from '../hooks/useSlideIn';

const AboutSection = () => {
  const slideInRef = useSlideIn();

  return (
    <section ref={(el) => (slideInRef.current[0] = el)} id="about" className="about slide-in">
      <h2>Who We Are</h2>
      <p>At Seccastudio, we are committed to delivering experiences that resonate with players on a personal level. Our games are more than just entertainment—they are journeys filled with unique stories, stunning visuals, and carefully crafted mechanics. With every project, we aim to push the boundaries of creativity, bringing fresh, exciting challenges that captivate gamers worldwide.</p>
    </section>
  );
};

export default AboutSection;
