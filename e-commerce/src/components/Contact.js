import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null); // Clear any previous errors

        if (!name || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            // Here you would typically send the form data to your server
            // For this example, we'll simulate a successful submission
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call delay
            setSubmitted(true);
        } catch (err) {
            setError("An error occurred while submitting the form. Please try again later.");
            console.error("Error submitting form:", err);
        }
    };

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

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
    };

    const labelStyle = {
        marginBottom: '5px',
        fontWeight: 'bold',
    };

    const inputStyle = {
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const textareaStyle = {
        padding: '10px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        height: '120px',
    };

    const buttonStyle = {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 15px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const errorStyle = {
        color: 'red',
        marginBottom: '10px',
    };

    const successStyle = {
        color: 'green',
        marginBottom: '10px',
    };

    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>Contact Us</h1>

            {error && <p style={errorStyle}>{error}</p>}
            {submitted && <p style={successStyle}>Thank you for your message! We will get back to you shortly.</p>}

            {!submitted && (
                <form style={formStyle} onSubmit={handleSubmit}>
                    <label htmlFor="name" style={labelStyle}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                        required
                    />

                    <label htmlFor="email" style={labelStyle}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={inputStyle}
                        required
                    />

                    <label htmlFor="message" style={labelStyle}>Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={textareaStyle}
                        required
                    />

                    <button type="submit" style={buttonStyle}>Submit</button>
                </form>
            )}
        </div>
    );
};

export default Contact;