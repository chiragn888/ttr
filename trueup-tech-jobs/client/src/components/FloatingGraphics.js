import React from 'react';
import './FloatingGraphics.css'; // Assuming a CSS file for styling

const FloatingGraphics = () => {
  return (
    <div className="floating-graphics-container">
      <img src="./nvidia-logo.png" alt="NVIDIA" className="tech-logo nvidia" />
      <img src="./youtube-logo.png" alt="YouTube" className="tech-logo youtube" />
      <img src="./apple-logo.png" alt="Apple" className="tech-logo apple" />
      <img src="./epic-games-logo.png" alt="Epic Games" className="tech-logo epic-games" />
      {/* Add more logos as needed */}
    </div>
  );
};

export default FloatingGraphics;