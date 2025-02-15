import React from 'react';

const About = () => {
  return (
    <div style={{
      maxWidth: '960px',
      margin: '20px auto',
      padding: '20px',
      fontFamily: 'sans-serif',
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{
        fontSize: '2rem',
        marginBottom: '10px',
        color: '#333',
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
        paddingBottom: '5px'
      }}>About ElectroX</h1>

      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVMZKhGeffIdf39tGompGXMS6ZcPt4mpupg&s" alt="Our Story" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          marginBottom: '15px',
          color: '#666',
          textAlign: 'justify'
        }}>
          Welcome to ElectroX, your one-stop shop for all your electronic needs. We are dedicated to providing high-quality products, competitive prices, and excellent customer service. Founded in 2023, ElectroX started as a small local store with a big vision: to make technology accessible and enjoyable for everyone.
        </p>
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '10px',
          color: '#333',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          paddingBottom: '5px'
        }}>Our Mission</h2>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          marginBottom: '15px',
          color: '#666',
          textAlign: 'justify'
        }}>
          To make technology accessible and enjoyable for everyone. We believe that everyone should have access to the latest and greatest electronics, regardless of their budget or technical expertise.
        </p>
        <img src="https://webcomconnect.com/images/mission.webp" alt="Our Mission" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '10px',
          color: '#333',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          paddingBottom: '5px'
        }}>Our Values</h2>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          marginBottom: '15px',
          color: '#666',
          textAlign: 'justify'
        }}>
          Quality, Innovation, Customer Focus, and Integrity. These are the core values that guide everything we do. We are committed to providing our customers with the best possible experience, from the products we sell to the service we provide.
        </p>
        <img src="https://www.clickpost.ai/hubfs/featured%20images/Updated%20blog%20banner%20images%20Mar%2022/ecommerce-value-chain.webp" alt="Our Values" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '10px',
          color: '#333',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          paddingBottom: '5px'
        }}>Our Team</h2>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          marginBottom: '15px',
          color: '#666',
          textAlign: 'justify'
        }}>
          Our team is made up of passionate and knowledgeable individuals who are dedicated to helping you find the perfect electronics for your needs. We are always happy to answer your questions and provide expert advice. We are constantly learning and growing to ensure we can provide the best service to our customers.
        </p>
        <img src="https://catsy.com/blog/wp-content/uploads/2023/04/high-performing-eCommerce-team-1024x576.png" alt="Our Team" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
      </div>

      <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 style={{
          fontSize: '2rem',
          marginBottom: '10px',
          color: '#333',
          textAlign: 'center',
          borderBottom: '1px solid #ddd',
          paddingBottom: '5px'
        }}>Contact Us</h2>
        <p style={{
          fontSize: '1rem',
          lineHeight: '1.6',
          marginBottom: '15px',
          color: '#666',
          textAlign: 'justify'
        }}>
          Have questions or feedback? We'd love to hear from you! Contact us at <a href="mailto:info@electrox.com" style={{color:"blue"}}>info@electrox.com</a> or call us at (123) 456-7890.
        </p>
        <img src="https://11sevengroup.com/wp-content/uploads/2023/08/Contact-US.webp" alt="Contact Us" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px', borderRadius: '4px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }} />
      </div>

    </div>
  );
};

export default About;