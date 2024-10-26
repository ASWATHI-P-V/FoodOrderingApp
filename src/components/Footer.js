import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>About Foodies Hub</h3>
          <p>Foodies Hub offers a wide variety of delicious meals delivered straight to your doorstep. We bring the best flavors from your favorite restaurants to your home.</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#order">Order Now</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@foodieshub.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Location: 123 Food Street, Cityname</p>
        </div>

        {/* Newsletter Section */}
        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Social Links and Copyright */}
      <div className="footer-bottom">
        <ul className="social-icons">
          <li><a href="/home/aswathi/Documents/workspace/Food_ordering/food-ordering-app/public/images/linkedin.png"> <img src="/images/instagram.png" alt="Instagram" /></a></li>
          
          <li><a href="/home/aswathi/Documents/workspace/Food_ordering/food-ordering-app/public/images/instagram.png"> <img src="/images/linkedin.png" alt="Instagram" /></a></li>
          <li><a href="/home/aswathi/Documents/workspace/Food_ordering/food-ordering-app/public/images/linkedin.png"> <img src="/images/youtube.png" alt="Instagram" /></a></li>
        </ul>
        <p>&copy; {new Date().getFullYear()} Foodies Hub. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
