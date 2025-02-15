import React from 'react';
import '../css/Footer.css'; 

const Footer = () => {
    const handleEmailClick = () => {
        window.location.href = "mailto:electrox@gmail.com"; // Opens the user's email client
      };
    
      const handlePhoneClick = () => {
        window.location.href = "tel:+91-9558211227"; // Opens the phone dialer on mobile
      };
    
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>About ElectroX</h4>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Help</h4>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/help">Help Center</a></li>
              <li><a href="/shipping">Shipping</a></li>
              <li><a href="/returns">Returns & Refunds</a></li>
            </ul>
          </div>
          <div className="footer-section contact-info">
            <h4>Contact Us</h4>
            <p>Tel: <a href="#" onClick={handlePhoneClick}>+91-9558211227</a> </p>
            <p> Email: <a href="#" onClick={handleEmailClick}>info@electrox.com</a></p>
          </div>
          <div className="footer-section">
            <h4>Social</h4>
            <ul className="social-icons">
              <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li> {/* Replace with your icons */}
              <li><a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a></li>
              <li><a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ElectroX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;