import React from 'react';
import './TopRestaurants.css'; // Create a corresponding CSS file for styling

const TopRestaurants = () => {
  const restaurants = [
    { id: 1, name: 'Adil Hotel', rating: '⭐️⭐️⭐️⭐️', distance: '45–50 mins', image: '/images/r1.jpg' },
    { id: 2, name: 'Royal Cuisine', rating: '⭐️⭐️⭐️⭐️⭐️', distance: '30–35 mins', image: '/images/r2.jpg' },
    { id: 3, name: 'Tasty Treats', rating: '⭐️⭐️⭐️⭐️', distance: '25–30 mins', image: '/images/r3.jpg' },
    { id: 4, name: 'Spice Delight', rating: '⭐️⭐️⭐️⭐️', distance: '40–45 mins', image: '/images/r4.jpg' },
    { id: 5, name: 'Healthy Hub', rating: '⭐️⭐️⭐️⭐️⭐️', distance: '15–20 mins', image: '/images/r5.jpg' },
    { id: 6, name: 'Ocean Breeze', rating: '⭐️⭐️⭐️⭐️', distance: '35–40 mins', image: '/images/r6.jpg' },
    { id: 7, name: 'Mountain Grill', rating: '⭐️⭐️⭐️⭐️⭐️', distance: '50–55 mins', image: '/images/r7.jpg' },
    { id: 8, name: 'Golden Spoon', rating: '⭐️⭐️⭐️⭐️', distance: '20–25 mins', image: '/images/r8.jpg' },
    { id: 9, name: 'BBQ Nation', rating: '⭐️⭐️⭐️⭐️⭐️', distance: '60–65 mins', image: '/images/r9.jpg' },
  ];

  const handleScroll = (scrollOffset) => {
    const container = document.getElementById('carousel-container');
    container.scrollLeft += scrollOffset;
  };

  return (
    <div className="container">
      <h1 className="heading">Top Restaurants</h1>

      {/* Carousel Wrapper */}
      <div className="carousel-wrapper">
        <button onClick={() => handleScroll(-300)} className="arrow-button previous">
          &lt;
        </button>

        <div id="carousel-container" className="carousel-container">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="card">
              <img src={restaurant.image} alt={restaurant.name} />
              <h3>{restaurant.name}</h3>
              <p><strong>Rating:</strong> {restaurant.rating}</p>
              <p><strong>Distance:</strong> {restaurant.distance}</p>
            </div>
          ))}
        </div>

        <button onClick={() => handleScroll(300)} className="arrow-button next">
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TopRestaurants;
