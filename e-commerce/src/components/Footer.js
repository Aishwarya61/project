import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Footer.css';

const Footer = () => {
    const handleEmailClick = () => {
        window.location.href = "mailto:electrox@gmail.com";
    };

    const handlePhoneClick = () => {
        window.location.href = "tel:+91-9558211227";
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>About ElectroX</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li> {/* Use Link component */}
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li><Link to="/careers">Careers</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h4>Help</h4>
                        <ul>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/help">Help Center</Link></li>
                            <li><Link to="/shipping">Shipping</Link></li>
                            <li><Link to="/returns">Returns & Refunds</Link></li>
                        </ul>
                    </div>
                    <div className="footer-section contact-info">
                        <h4>Contact Us</h4>
                        <p>Tel: <a href="#" onClick={handlePhoneClick}>+91-9558211227</a></p>
                        <p>Email: <a href="#" onClick={handleEmailClick}>info@electrox.com</a></p>
                    </div>
                    <div className="footer-section">
                        <h4>Social</h4>
                        <ul className="social-icons">
                            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a></li>
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