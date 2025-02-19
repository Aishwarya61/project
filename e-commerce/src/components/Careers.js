import React ,{useState} from 'react';

const Careers = () => {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        resume: null, 
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(null);
    const handleApplyNowClick = () => {
        setShowForm(true);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleResumeChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError(null);

        if (!formData.name || !formData.email || !formData.resume) {
            setFormError("Please fill in all fields and upload your resume.");
            return;
        }

        try {
            setFormSubmitted(true);
            setShowForm(false); // Hide the form after successful submission
            setFormData({ name: '', email: '', resume: null }); // Clear the form
        } catch (error) {
            console.error("Form submission error:", error);
            setFormError("An error occurred during submission. Please try again.");
        }
    };

    return (
        <div style={{ // containerStyle
            maxWidth: '960px',
            margin: '20px auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: '#f8f8f8',
            borderRadius: '8px',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
            color: '#333',
            '@media (max-width: 768px)': {
                maxWidth: '90%',
                padding: '15px',
            },
        }}>
            <h1 style={{ // titleStyle
                fontSize: '2.3rem',
                marginBottom: '10px',
                color: 'orange',
                textAlign: 'center',
                borderBottom: '2px solid #ddd',
                paddingBottom: '10px',
                '@media (max-width: 768px)': {
                    fontSize: '2rem',
                },
            }}>Careers at ElectroX</h1>

            <p style={{ // introStyle
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '20px',
                textAlign: 'center',
                color: '#555',
                fontStyle: 'italic',
                '@media (max-width: 768px)': {
                    fontSize: '1rem',
                },
            }}>
                "Powering the Future, One Connection at a Time."<br />
                Join our team of passionate innovators and help us shape the future of electronics! We're always looking for talented individuals who are driven, creative, and committed to excellence.
            </p>

            <div style={{ 
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '30px',
                flexWrap: 'wrap',
                '@media (max-width: 768px)': {
                    flexDirection: 'column',
                },
            }}>
                <img src={'https://storiesflistgv2.blob.core.windows.net/stories/2017/12/FlipkartCustomerDay_mainbanner2.jpg'} alt="Team 1" style={{ // teamImageStyle
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    '@media (max-width: 768px)': {
                        width: '150px',
                        height: '150px',
                        margin: '10px 0',
                    },
                }} />
                <img src={'https://etimg.etb2bimg.com/photo/88267970.cms'} alt="Team 2" style={{ 
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    '@media (max-width: 768px)': {
                        width: '150px',
                        height: '150px',
                        margin: '10px 0',
                    },
                }} />
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQ5xoc7_g43yiSn8c60pnDz-LIdMwIILUcg&s'} alt="Team 3" style={{ // teamImageStyle
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease',
                    '@media (max-width: 768px)': {
                        width: '150px',
                        height: '150px',
                        margin: '10px 0',
                    },
                }} />
            </div>

            <h2 style={{ // openingsHeadingStyle
                fontSize: '1.8rem',
                color: '#333',
                textAlign: 'center',
                marginBottom: '15px',
                paddingBottom: '5px',
                textDecoration: 'underline orange',
                textUnderlineOffset: '8px',
            }}>Current Openings</h2>

            <div style={{ // jobListingStyle
                marginBottom: '25px',
                paddingBottom: '20px',
                borderBottom: '1px solid #eee',
                '@media (max-width: 768px)': {
                    marginBottom: '20px',
                },
            }}>
                <h3 style={{ // jobTitleStyle
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#222',
                    '@media (max-width: 768px)': {
                        fontSize: '1.2rem',
                    },
                }}>Software Engineer</h3>
                <p style={{ // jobDescriptionStyle
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '15px',
                    color: '#555',
                    '@media (max-width: 768px)': {
                        fontSize: '0.9rem',
                    },
                }}>We are seeking a skilled software engineer to develop and maintain our web applications. Experience with React, Node.js, and cloud technologies is a plus.</p>
                <a href="#" onClick = {handleApplyNowClick}style={{ // applyButtonStyle
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease',
                }}>Apply Now</a>
            </div>

            <div style={{ // jobListingStyle
                marginBottom: '25px',
                paddingBottom: '20px',
                borderBottom: '1px solid #eee',
                '@media (max-width: 768px)': {
                    marginBottom: '20px',
                },
            }}>
                <h3 style={{ // jobTitleStyle
                    fontSize: '1.4rem',
                    fontWeight: 'bold',
                    marginBottom: '8px',
                    color: '#222',
                    '@media (max-width: 768px)': {
                        fontSize: '1.2rem',
                    },
                }}>Marketing Specialist</h3>
                <p style={{ // jobDescriptionStyle
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '15px',
                    color: '#555',
                    '@media (max-width: 768px)': {
                        fontSize: '0.9rem',
                    },
                }}>We are looking for a creative marketing specialist to develop and execute marketing campaigns. Experience in digital marketing and social media is required.</p>
                <a href="#" onClick = {handleApplyNowClick} style={{ // applyButtonStyle
                    backgroundColor: '#007bff',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    textDecoration: 'none',
                    transition: 'background-color 0.3s ease',
                }}>Apply Now</a>
            </div>

            <h2 style={{ // whyJoinHeadingStyle
                fontSize: '1.8rem',
                color: '#333',
                textAlign: 'center',
                marginTop: '25px',
                marginBottom: '15px',
                paddingBottom: '5px',
                textDecoration: 'underline orange',
                textUnderlineOffset: '8px',
            }}>Why Join Us?</h2>
            <p style={{ // benefitsStyle
                fontSize: '1.1rem',
                lineHeight: '1.7',
                textAlign: 'center',
                color: '#555',
            }}>
                At ElectroX, we offer a dynamic and supportive work environment, opportunities for professional growth, and competitive benefits. We value diversity and are committed to creating an inclusive workplace.
            </p>
        {showForm && (
            <div style={{ marginTop: '20px' }}>
                <h2 style={{
                    fontSize: '1.8rem',
                    color: '#333',
                    textAlign: 'center',
                    marginBottom: '15px',
                    paddingBottom: '5px',
                    textDecoration: 'underline orange',
                    textUnderlineOffset: '8px',
                }}>Application Form</h2>

                {formError && <p style={{ color: 'red' }}>{formError}</p>}

                <form onSubmit={handleSubmit}>
                <label htmlFor="name" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            style={{
                                padding: '10px',
                                marginBottom: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%' 
                            }}
                            required
                        />

                        <label htmlFor="email" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            style={{
                                padding: '10px',
                                marginBottom: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '5px',
                                width: '100%' 
                            }}
                            required
                        />

                        <label htmlFor="resume" style={{ marginBottom: '5px', fontWeight: 'bold' }}>Resume:</label>
                        <input
                            type="file"
                            id="resume"
                            name="resume"
                            onChange={handleResumeChange}
                            style={{ marginBottom: '10px' }}
                            required
                        />

                    <button type="submit" style={{
                        backgroundColor: '#007bff',
                        color: '#fff',
                        padding: '10px 20px',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        width: '100%'
                    }}>Submit Application</button>
                </form>
            </div>
        )}

        {/* Success message */}
        {formSubmitted && (
            <p style={{ color: 'green', marginTop: '10px', textAlign: 'center' }}>
                Thank you for your application! We will be in touch soon.
            </p>
        )}
        </div>
    );
};

export default Careers;