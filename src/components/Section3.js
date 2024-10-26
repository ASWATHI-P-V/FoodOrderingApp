import React from 'react';
import './Section3.css';

const Section3 = () => {
  const items = [
    { id: 1, name: 'Pizza', image: '/images/pizza.jpg' },
    { id: 2, name: 'Burger', image: '/images/burger.jpg' },
    { id: 3, name: 'Pasta', image: '/images/pasta.jpg' },
    { id: 4, name: 'Salad', image: '/images/salad.jpg' },
    { id: 5, name: 'Sushi', image: '/images/sushi.jpg' },
    { id: 6, name: 'Steak', image: '/images/steak.jpg' },
    { id: 7, name: 'Coke', image: '/images/coke.jpg' },
    { id: 8, name: 'Ice Cream', image: '/images/icecream.jpg' },
  ];

  return (
    <div className="section3-container">
      <h1 className="section3-title">Popular Dishes</h1>

      <div className="image-row">
        {items.map(item => (
          <div key={item.id} className="image-item">
            <img src={item.image} alt={item.name} className="round-image" />
            <p className="image-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section3;
