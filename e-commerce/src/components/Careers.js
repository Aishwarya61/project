import React from 'react';

const Careers = () => {
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

    const paragraphStyle = {
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '15px',
        color: '#666',
    };

    const jobListingStyle = {
        marginBottom: '20px',
        borderBottom: '1px solid #ccc',
        paddingBottom: '15px'
    };

    const jobTitleStyle = {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginBottom: '5px',
        color: '#333'
    };

    const applyButtonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '8px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        textDecoration: 'none'
    };


    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Careers at ElectroX</h1>

            <p style={paragraphStyle}>
                Join our team of passionate innovators and help us shape the future of electronics! We're always looking for talented individuals who are driven, creative, and committed to excellence.
            </p>

            <h2 style={headingStyle}>Current Openings</h2>

            {/* Example Job Listing 1 */}
            <div style={jobListingStyle}>
                <h3 style={jobTitleStyle}>Software Engineer</h3>
                <p style={paragraphStyle}>We are seeking a skilled software engineer to develop and maintain our web applications. Experience with React, Node.js, and cloud technologies is a plus.</p>
                <a href="#" style={applyButtonStyle}>Apply Now</a> {/* Replace # with actual link */}
            </div>

            {/* Example Job Listing 2 */}
            <div style={jobListingStyle}>
                <h3 style={jobTitleStyle}>Marketing Specialist</h3>
                <p style={paragraphStyle}>We are looking for a creative marketing specialist to develop and execute marketing campaigns. Experience in digital marketing and social media is required.</p>
                <a href="#" style={applyButtonStyle}>Apply Now</a> {/* Replace # with actual link */}
            </div>

            {/* Add more job listings as needed */}

            {/* If no current openings: */}
            {/* <p style={paragraphStyle}>There are no current job openings at this time. Please check back later.</p> */}

            <h2 style={headingStyle}>Why Join Us?</h2>
            <p style={paragraphStyle}>
                At ElectroX, we offer a dynamic and supportive work environment, opportunities for professional growth, and competitive benefits. We value diversity and are committed to creating an inclusive workplace.
            </p>
        </div>
    );
};

export default Careers;