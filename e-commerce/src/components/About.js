// About.js
import React from 'react';
import '../css/About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="about-container">

      <h1 className="about-title">About ElectroX</h1>

      <div className="about-section">
      <img src="/image/aboutus.jpg" alt="About Us" className="about-image" />
        <p className="about-text">
          Welcome to ElectroX, your one-stop shop for all your electronic needs. We are dedicated to providing high-quality products, competitive prices, and excellent customer service. Founded in 2023, ElectroX started as a small local store with a big vision: to make technology accessible and enjoyable for everyone.
        </p>
      </div>

      <div className="about-section">
        <h3 className="about-section-title">Our Mission</h3>
        <p className="about-text">
          To make technology accessible and enjoyable for everyone. We believe that everyone should have access to the latest and greatest electronics, regardless of their budget or technical expertise.
        </p>
        <img src="https://webcomconnect.com/images/mission.webp" alt="Our Mission" className="about-image" />
      </div>

      <div className="about-section">
        <h3 className="about-section-title">Our Values</h3>
        <p className="about-text">
          Quality, Innovation, Customer Focus, and Integrity. These are the core values that guide everything we do. We are committed to providing our customers with the best possible experience, from the products we sell to the service we provide.
        </p>
        <img src="https://www.clickpost.ai/hubfs/featured%20images/Updated%20blog%20banner%20images%20Mar%2022/ecommerce-value-chain.webp" alt="Our Values" className="about-image" />
      </div>

      <div className="about-section">
        <h3 className="about-section-title">Our Team</h3>
        <p className="about-text">
          Our team is made up of passionate and knowledgeable individuals who are dedicated to helping you find the perfect electronics for your needs. We are always happy to answer your questions and provide expert advice. We are constantly learning and growing to ensure we can provide the best service to our customers.
        </p>
        <img src="https://photos.smugmug.com/Corporate/Flipkart-Warehouse-Bots/i-MLXgK73/0/MNjTpP7tfMvVXHGKV4M2X3swW8W5KGwDrngWF4qqv/XL/FlipKart_-23-XL.jpg" alt="Our Team" className="about-image" />
      </div>

      <div className="about-section">
        <h3 className="about-section-title">Contact Us</h3>
        <p className="about-text">
          Have questions or feedback? We'd love to hear from you! Contact us at <a href="mailto:info@electrox.com" className="contact-link">info@electrox.com</a>
        </p>
        <img src="https://11sevengroup.com/wp-content/uploads/2023/08/Contact-US.webp" alt="Contact Us" className="about-image" />
      </div>
    </div>
  );
};

export default About;