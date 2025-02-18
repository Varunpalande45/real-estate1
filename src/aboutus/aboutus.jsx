// AboutUs.js

// AboutUs.js

// AboutUs.js

import React from 'react';
import './aboutus.scss';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to Dream Homes Real Estate. We are committed to finding you the home of your dreams.</p>
      <div className="mission-section">
        <h2>Our Mission</h2>
        <img src="https://images.unsplash.com/photo-1570129477492-45c003edd2be" alt="Our mission" />
        <p>To provide the best real estate services in the industry and make your home buying experience seamless.</p>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36" alt="Our team" />
        <p>We have a dedicated team of professionals ready to assist you in finding your perfect home. Our team includes experienced real estate agents, financial advisors, and customer support specialists who work together to ensure your satisfaction.</p>
      </div>
      <div className="values-section">
        <h2>Our Values</h2>
        
        <p>We value integrity, transparency, and customer satisfaction. We believe in building lasting relationships with our clients based on trust and mutual respect.</p>
      </div>
      
    </div>
  );
};

export default AboutUs;
