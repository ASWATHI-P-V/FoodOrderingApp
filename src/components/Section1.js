import React from 'react';
import '../App.css';
import { Button } from '@mui/material';

const Section1 = () => {
  return (
    <div className="section-container1">
      {/* Background image container */}
      <div className="background-image1"></div>
      
      {/* Content container */}
      <div className="content1">
        <h1 className="animated-heading">Welcome to Foodies Hub</h1>
        <p className="animated-paragraph">
          Order your favorite meals online with ease!
        </p>
        <p className="animated-paragraph">
          Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. 
          Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.
        </p>

        <div className="button1">  
          <Button className="enroll-button1" variant="contained" color="primary">  
            Get Started 
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Section1;
