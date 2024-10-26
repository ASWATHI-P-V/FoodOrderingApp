import React from 'react';
import './Section22.css'; // Import the stylesheet

const Section22 = () => {
  return (
    <div className="section22-container">
      <div className="content">
        {/* Left side text section */}
        <div className="text-section">
          <h1>Delicious Meals Delivered to Your Doorstep</h1>
          <p>The restaurant platform that's made to order.</p>
          <p>At FOODIES HUB, we bring you a wide variety of mouth-watering dishes from your favorite restaurants.</p>
          <p>Whether you crave a quick snack or an indulgent meal, our menu has something for everyone. Order now and experience the fastest food delivery in town!</p>
        </div>

        {/* Right side content or video section */}
        <div className="video-section-container">
        <div className="video-section">
          <a href="https://youtu.be/Km-6TD3UU7o?si=vd6reLquDY1zr5_c" target="_blank" rel="noopener noreferrer">
            <iframe
              src="https://www.youtube.com/embed/Km-6TD3UU7o?autoplay=1&mute=1&loop=1&playlist=Km-6TD3UU7o"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
            ></iframe>
          </a>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section22;
