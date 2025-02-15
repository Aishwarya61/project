import React from 'react';

const Returns = () => {
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
        <div style={containerStyle}>
            <h1 style={headingStyle}>Returns & Refunds</h1>

            <p style={paragraphStyle}>Thank you for shopping at ElectroX! We want you to be completely satisfied with your purchase.  This page outlines our return and refund policy.</p>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Eligibility for Returns</h2>
                <p style={paragraphStyle}>Most items are eligible for return within [Number] days of delivery.  To be eligible for a return, the item must be:</p>
                <ul style={listStyle}>
                    <li style={listItemStyle}>In its original condition, unused, and with all original packaging and tags.</li>
                    <li style={listItemStyle}>Not damaged or altered in any way.</li>
                    <li style={listItemStyle}>Accompanied by the original proof of purchase (invoice or order confirmation).</li>
                </ul>
                <p style={paragraphStyle}>Some items are non-returnable due to hygiene reasons, safety regulations, or other specific conditions.  These items will be clearly marked as non-returnable on the product page.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>How to Initiate a Return</h2>
                <p style={paragraphStyle}>To initiate a return, please follow these steps:</p>
                <ol style={listStyle}>
                    <li style={listItemStyle}>Contact our customer support team within [Number] days of delivery at <a href="mailto:aishwarya610@gmail.com" style={{ color: 'blue', textDecoration: 'none' }}>support@electrox.com</a> or call us at <a href="tel:+91-9558211227" style={{ color: 'blue', textDecoration: 'none' }}>+91-9558211227</a>.</li>
                    <li style={listItemStyle}>Provide your order number and details of the item you wish to return.</li>
                    <li style={listItemStyle}>Our customer support team will provide you with a Return Authorization (RA) number and instructions for returning the item.</li>
                    <li style={listItemStyle}>Pack the item securely in its original packaging and ship it to the address provided by our customer support team.</li>
                    <li style={listItemStyle}>Include the RA number on the package.</li>
                </ol>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Refund Process</h2>
                <p style={paragraphStyle}>Once we receive the returned item, we will inspect it to ensure it meets our return criteria.  If the item is eligible for a refund, we will process the refund to your original payment method within [Number] business days.</p>
                <p style={paragraphStyle}>Refunds will include the original purchase price of the item and any applicable taxes.  Shipping costs are non-refundable unless the return is due to an error on our part.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Exchanges</h2>
                <p style={paragraphStyle}>If you wish to exchange an item for a different size, color, or product, please contact our customer support team.  Exchanges are subject to product availability.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Damaged or Defective Items</h2>
                <p style={paragraphStyle}>If you receive a damaged or defective item, please contact us immediately.  We will arrange for a replacement or refund as appropriate.</p>
            </div>

            <div style={sectionStyle}>
                <h2 style={sectionHeadingStyle}>Contact Us</h2>
                <p style={paragraphStyle}>If you have any questions or concerns about our return and refund policy, please don't hesitate to contact us.</p>
                <p style={paragraphStyle}>Email: <a href="mailto:support@electrox.com" style={{ color: 'blue', textDecoration: 'none' }}>support@electrox.com</a></p>
                <p style={paragraphStyle}>Phone: <a href="tel:+91-9558211227" style={{ color: 'blue', textDecoration: 'none' }}>+91-9558211227</a></p>
            </div>

        </div>
    );
};

export default Returns;