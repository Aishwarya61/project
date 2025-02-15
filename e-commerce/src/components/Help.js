import React from 'react';
import { Link } from 'react-router-dom';

const HelpAndSupport = () => {
    const containerStyle = {
        maxWidth: '960px',
        margin: '20px auto',
        padding: '20px',
        fontFamily: 'sans-serif',
    };

    const headingStyle = {
        fontSize: '2rem',
        marginBottom: '10px',
        color: '#333',
    };

    const sectionStyle = {
        marginBottom: '20px',
    };

    const sectionHeadingStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
    };

    const linkStyle = {
        color: '#007bff',
        textDecoration: 'none',
    };

    const paragraphStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '15px',
        color: '#666',
    };

    const supportContactStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '15px',
        color: '#333', // Make contact info more prominent
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Help & Support</h1>

            <p style={paragraphStyle}>Welcome to our Help & Support center!  We're here to assist you with any questions or issues you may have.  Browse the resources below or contact our support team for personalized assistance.</p>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Frequently Asked Questions</h2>
                <p style={paragraphStyle}>Find quick answers to common questions about our products, services, orders, shipping, returns, and more.</p>
                <Link to="/faq" style={linkStyle}>View FAQs</Link>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Product Support</h2>
                <p style={paragraphStyle}>Need help with a specific product?  We offer a range of resources to help you troubleshoot issues and get the most out of your purchase.</p>

                <h3 style={sectionHeadingStyle}>Troubleshooting Guides</h3>
                <p style={paragraphStyle}>Find step-by-step guides for common issues.</p>
                {/* Add links to specific troubleshooting guides if you have them */}

                <h3 style={sectionHeadingStyle}>Product Manuals</h3>
                <p style={paragraphStyle}>Download product manuals and documentation.</p>
                {/* Add links to product manuals if you have them */}

                <h3 style={sectionHeadingStyle}>Contact Support</h3>
                <p style={paragraphStyle}>If you can't find the answer you need, our support team is ready to assist you.</p>
                <Link to="/contact" style={linkStyle}>Contact Support</Link>
            </div>
            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Contact Us</h2>
                <p style={paragraphStyle}>If you prefer to speak with a member of our team directly, please contact us using the information below.</p>
                <p style={supportContactStyle}>
                    Email: <a href="mailto:aishwarya610@gmail.com" style={linkStyle}>support@electrox.com</a><br />
                    Phone: <a href="tel:+91-9558211227" style={linkStyle}>+91-9558211227</a>
                </p>
            </div>
            {/* Add more sections as needed (e.g., Warranty Information, Community Forums, etc.) */}
        </div>
    );
};

export default HelpAndSupport;