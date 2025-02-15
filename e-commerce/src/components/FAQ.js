import React from 'react';

const FAQ = () => {
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

    const faqItemStyle = {
        marginBottom: '20px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '15px',
    };

    const questionStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#333',
        cursor: 'pointer', // Make question clickable
    };

    const answerStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        color: '#666',
        maxHeight: '0', // Initially hidden
        overflow: 'hidden',
        transition: 'max-height 0.3s ease-in-out', // Smooth transition
    };

    const [expandedQuestion, setExpandedQuestion] = React.useState(null);

    const toggleAnswer = (question) => {
        setExpandedQuestion(expandedQuestion === question ? null : question);
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Frequently Asked Questions</h1>

            <div style={faqItemStyle}>
                <h2
                    style={questionStyle}
                    onClick={() => toggleAnswer("payment")} // Toggle on click
                >
                    What payment methods do you accept?
                </h2>
                <div
                    style={{
                        ...answerStyle,
                        maxHeight: expandedQuestion === "payment" ? "200px" : "0", // Show/hide answer
                    }}
                >
                    <p>We accept all major credit cards, debit cards, and online payment methods.</p>
                </div>
            </div>

            <div style={faqItemStyle}>
                <h2
                    style={questionStyle}
                    onClick={() => toggleAnswer("shipping")} // Toggle on click
                >
                    How long does shipping take?
                </h2>
                <div
                    style={{
                        ...answerStyle,
                        maxHeight: expandedQuestion === "shipping" ? "200px" : "0", // Show/hide answer
                    }}
                >
                    <p>Shipping times vary depending on your location and the shipping method you choose.  You can find estimated delivery times at checkout.</p>
                </div>
            </div>

            <div style={faqItemStyle}>
                <h2
                    style={questionStyle}
                    onClick={() => toggleAnswer("returns")} // Toggle on click
                >
                    What is your return policy?
                </h2>
                <div
                    style={{
                        ...answerStyle,
                        maxHeight: expandedQuestion === "returns" ? "200px" : "0", // Show/hide answer
                    }}
                >
                    <p>We accept returns within 30 days of purchase for most items.  Please see our Returns & Refunds page for details and exceptions.</p>
                </div>
            </div>
            
            <div style={faqItemStyle}>
                <h2
                    style={questionStyle}
                    onClick={() => toggleAnswer("refund")} // Toggle on click
                >
                    In howmany days we get refund amount?
                </h2>
                <div
                    style={{
                        ...answerStyle,
                        maxHeight: expandedQuestion === "refund" ? "200px" : "0", // Show/hide answer
                    }}
                >
                    <p>Generally refund amount is credited to your account with in 2 days.  Please see our Returns & Refunds page for details and exceptions.</p>
                </div>
            </div>

            {/* Add more FAQ items as needed */}
        </div>
    );
};

export default FAQ;