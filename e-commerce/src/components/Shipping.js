import React from 'react';

const Shipping = () => {
    const containerStyle = {
        maxWidth: '960px',
        margin: '20px auto',
        padding: '20px',
        fontFamily: 'sans-serif',
    };

    const headingStyle = {
        fontSize: '2.3rem',
        marginBottom: '10px',
        color: 'orange',
        textAlign : 'center',
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

    const paragraphStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '15px',
        color: '#666',
    };

    const listStyle = {
        listStyle: 'none',
        padding: 0,
    };

    const listItemStyle = {
        marginBottom: '5px',
    };


    return (
        <>
        <style>{`
        @media (max-width: 768px) {
                        h1 {
                            font-size: 1.8rem;
                        }

                        h2 {
                            font-size: 1.1rem;
                        }

                        p, li {
                            font-size: 0.95rem;
                        }

                        .container {
                            padding: 15px;
                        }
                    }

                    @media (max-width: 480px) {
                        h1 {
                            font-size: 1.5rem;
                        }

                        h2 {
                            font-size: 1rem;
                        }

                        p, li {
                            font-size: 0.9rem;
                        }

                        .container {
                            padding: 10px;
                        }
                    }
        `}

        </style>
        <div style={containerStyle}>
            <h1 style={headingStyle}>Shipping & Delivery</h1>

            <p style={paragraphStyle}>Thank you for shopping at ElectroX! We strive to make your shipping experience as smooth and convenient as possible.  Here's what you need to know about our shipping policies and procedures.</p>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Shipping Destinations</h2>
                <p style={paragraphStyle}>We currently ship to [List your shipping destinations - e.g., all states within India, select countries, etc.].  Please contact us if you have any questions about shipping to your location.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Shipping Options & Costs</h2>
                <p style={paragraphStyle}>We offer the following shipping options:</p>
                <ul style={listStyle}>
                    <li style={listItemStyle}><strong>Standard Shipping:</strong> [Description of standard shipping - e.g., 3-5 business days] - ₹[Cost]</li>
                    <li style={listItemStyle}><strong>Express Shipping:</strong> [Description of express shipping - e.g., 1-2 business days] - ₹[Cost]</li>
                    {/* Add more shipping options as needed */}
                </ul>
                <p style={paragraphStyle}>Shipping costs are calculated at checkout based on your chosen shipping method, destination, and the weight/dimensions of your order.</p>
                <p style={paragraphStyle}>Free shipping is offered on orders over ₹[Amount].</p> {/* Add your free shipping threshold */}
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Delivery Time</h2>
                <p style={paragraphStyle}>Delivery times are estimates and may vary depending on your location, shipping method, and unforeseen circumstances (e.g., holidays, weather delays).  You can track your order using the tracking number provided in your shipping confirmation email.</p>
                <p style={paragraphStyle}>Please allow [Number] business days for processing your order before it ships.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Order Tracking</h2>
                <p style={paragraphStyle}>Once your order has shipped, you will receive a shipping confirmation email with a tracking number.  You can use this tracking number to track the status of your shipment online.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>International Shipping</h2>
                <p style={paragraphStyle}>For international shipments, please be aware that you may be responsible for customs duties, taxes, and other import fees.  These fees are not included in the shipping cost and are your responsibility.</p>
                <p style={paragraphStyle}>Contact us for more information about international shipping.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Shipping Restrictions</h2>
                <p style={paragraphStyle}>Some items may have shipping restrictions due to size, weight, or regulations.  If you encounter any shipping restrictions at checkout, please contact us for assistance.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Contact Us</h2>
                <p style={paragraphStyle}>If you have any questions or concerns about our shipping policy, please don't hesitate to contact us.</p>
                <p style={paragraphStyle}>Email: <a href="mailto:aishwarya610@gmail.com" style={{ color: 'blue', textDecoration: 'none' }}>support@electrox.com</a></p>
                <p style={paragraphStyle}>Phone: <a href="tel:+91-9558211227" style={{ color: 'blue', textDecoration: 'none' }}>+91-9558211227</a></p>
            </div>

        </div>
    </>
    );
};

export default Shipping;