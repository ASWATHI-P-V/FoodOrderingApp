import React, { useState } from 'react';
import './Menu.css';

const Menu = ({ addToCart }) => {
  const [menuItems] = useState([
    { id: 1, name: 'Pizza', price: 10.99, category: 'Main Course' , image: '/images/pizza.jpg' },
    { id: 2, name: 'Burger', price: 7.99, category: 'Main Course' , image: '/images/burger.jpg' },
    { id: 3, name: 'Pasta', price: 8.99, category: 'Main Course' , image: '/images/pasta.jpg' },
    { id: 4, name: 'Salad', price: 5.99, category: 'Side' , image: '/images/salad.jpg' },
    { id: 5, name: 'Coke', price: 1.99, category: 'Drink' , image: '/images/coke.jpg' },
      { id: 6, name: 'Steak', price: 15.99, category: 'Main Course', image: '/images/steak.jpg' },
      { id: 7, name: 'Fried Chicken', price: 9.99, category: 'Main Course', image: '/images/fried_chicken.jpg' },
      { id: 8, name: 'Fish Tacos', price: 12.99, category: 'Main Course', image: '/images/fish_tacos.jpg' },
      { id: 9, name: 'Garlic Bread', price: 3.99, category: 'Side', image: '/images/garlic_bread.jpg' },
      { id: 10, name: 'Mozzarella Sticks', price: 6.49, category: 'Side', image: '/images/mozzarella_sticks.jpg' },
      { id: 11, name: 'Ice Cream', price: 4.99, category: 'Dessert', image: '/images/icecream.jpg' },
      { id: 12, name: 'Brownie', price: 3.99, category: 'Dessert', image: '/images/brownie.jpg' },
      { id: 13, name: 'Lemonade', price: 2.49, category: 'Drink', image: '/images/lemonade.jpg' },
      { id: 14, name: 'Iced Tea', price: 2.29, category: 'Drink', image: '/images/iced_tea.jpg' },
      { id: 15, name: 'Soup', price: 4.49, category: 'Side', image: '/images/soup.jpg' },
      { id: 16, name: 'Grilled Cheese', price: 6.99, category: 'Main Course', image: '/images/grilled_cheese.jpg' },
      { id: 17, name: 'French Fries', price: 2.99, category: 'Side', image: '/images/french_fries.jpg' },
      { id: 18, name: 'Cheesecake', price: 5.49, category: 'Dessert', image: '/images/cheesecake.jpg' },
      { id: 19, name: 'Milkshake', price: 3.99, category: 'Drink', image: '/images/milkshake.jpg' },
      { id: 20, name: 'Sushi', price: 13.99, category: 'Main Course', image: '/images/sushi.jpg' }
    
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [quantities, setQuantities] = useState({});

  const handleQuantityChange = (id, qty) => {
    setQuantities({
      ...quantities,
      [id]: qty,
    });
  };

  const filteredItems = menuItems.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu-container">
      <h1>Food Menu</h1>
      <input 
        type="text" 
        placeholder="Search for food..." 
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="menu-list">
        {filteredItems.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-image" />

            <h3>{item.name}</h3>
            <p>Price: ${item.price.toFixed(2)}</p>
            <div className="quantity-selector">
              <label>Quantity: </label>
              <input 
                type="number" 
                min="1" 
                value={quantities[item.id] || 1}
                onChange={(e) => handleQuantityChange(item.id, e.target.value)}
              />
            </div>
            <button onClick={() => addToCart({...item, quantity: quantities[item.id] || 1})}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
