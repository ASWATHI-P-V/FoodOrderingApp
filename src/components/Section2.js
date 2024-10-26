import React from 'react';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="section2-container">
      <div className='container'>
        <div className="section2-background">

          {/* Left side with image */}
          <div className="image-container">
            <img src="/images/cook.jpg" alt="Cook preparing meal" className="animated-image" />
          </div>

          {/* Right side with animated text */}
          <div className="text-container">
            <h1 className="animated-text">FOODIES HUB</h1>
            <p className="animated-text">
          
       We bring you a wide variety of mouth-watering dishes from your favorite restaurants.</p> 
       <p className="animated-text">
      Whether you crave a quick snack or an indulgent meal, our menu has something for everyone.     
      </p>
          
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section2;
