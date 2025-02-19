import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!name || !email || !message) {
            setError("Please fill in all fields.");
            return;
        }

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSubmitted(true);
        } catch (err) {
            setError("An error occurred. Please try again later.");
            console.error("Error submitting form:", err);
        }
    };

    return (
        <div style={{ // containerStyle
            maxWidth: '960px',
            margin: '20px auto',
            padding: '20px',
            fontFamily: 'sans-serif',
            backgroundColor: '#f8f8f8',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            '@media (max-width: 768px)': {
                maxWidth: '90%',
                padding: '15px',
            },
        }}>
            <h1 style={{ // headingStyle
                fontSize: '2.3rem',
                marginBottom: '10px',
                color: 'orange',
                textAlign: 'center',
                '@media (max-width: 768px)': {
                    fontSize: '2rem',
                },
            }}>Contact Us</h1>

            {error && <p style={{ // errorStyle
                color: 'red',
                marginBottom: '10px',
            }}>{error}</p>}
            {submitted && <p style={{ // successStyle
                color: 'green',
                marginBottom: '10px',
            }}>Thank you for your message! We will get back to you shortly.</p>}

            {!submitted && (
                <form style={{ // formStyle
                    display: 'flex',
                    flexDirection: 'column',
                }} onSubmit={handleSubmit}>
                    <label htmlFor="name" style={{ // labelStyle
                        marginBottom: '5px',
                        fontWeight: 'bold',
                    }}>Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={{ // inputStyle
                            padding: '10px',
                            marginBottom: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            '@media (max-width: 768px)': {
                                padding: '8px',
                                fontSize: '0.95rem',
                            },
                        }}
                        required
                    />

                    <label htmlFor="email" style={{ // labelStyle
                        marginBottom: '5px',
                        fontWeight: 'bold',
                    }}>Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={{ // inputStyle
                            padding: '10px',
                            marginBottom: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            '@media (max-width: 768px)': {
                                padding: '8px',
                                fontSize: '0.95rem',
                            },
                        }}
                        required
                    />

                    <label htmlFor="message" style={{ // labelStyle
                        marginBottom: '5px',
                        fontWeight: 'bold',
                    }}>Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        style={{ // textareaStyle
                            padding: '10px',
                            marginBottom: '10px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            height: '120px',
                            '@media (max-width: 768px)': {
                                padding: '8px',
                                fontSize: '0.95rem',
                                height: '100px',
                            },
                        }}
                        required
                    />

                    <button type="submit" style={{ // buttonStyle
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '10px 15px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        '@media (max-width: 768px)': {
                            padding: '8px 12px',
                            fontSize: '0.95rem',
                        },
                    }}>Submit</button>
                </form>
            )}
        </div>
    );
};

export default Contact;