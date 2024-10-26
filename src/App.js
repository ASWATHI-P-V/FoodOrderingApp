import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Cart from './components/Cart';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import TopRestaurants from './components/TopRestaurants';
import Section22 from './components/Section22';


import './App.css';


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [activeTab, setActiveTab] = useState('menu');

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const changeTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <Header />

     <div>
      <Section1 />
     </div>

     <div>
      <Section2 />
     </div>

     <div>
      <Section22 />
     </div>

     <div>
      <Section3 />
     </div>

     <div>
      <TopRestaurants />
     </div>

      <div className="tabs">
        <button 
          className={activeTab === 'menu' ? 'active' : ''}
          onClick={() => changeTab('menu')}>
          Menu
        </button>
        <button 
          className={activeTab === 'cart' ? 'active' : ''}
          onClick={() => changeTab('cart')}>
          Cart
        </button>
      </div>
      <div className="content">
        {activeTab === 'menu' && <Menu addToCart={addToCart} />}
        {activeTab === 'cart' && <Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
      </div>
      <Footer />
    </div>
  );
}

export default App;
