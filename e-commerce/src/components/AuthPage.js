import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from './Login'; // Import your Login component
import SignUp from './SignIn'; // Import your SignUp component
import '../css/Auth.css'; // Import your CSS (adjust path if needed)


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSuccess = () => {
    const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });
  };

  
  return (
    <div className="auth-page-container"> {/* Container for styling */}
      <div className="auth-form-wrapper"> {/* Wrapper for the form */}
        {isLogin ? (
          <Login toggleForm={toggleForm} onLoginSuccess={handleLoginSuccess} />
        ) : (
          <SignUp toggleForm={toggleForm} />
        )}
      </div>
    </div>
  );
};

export default AuthPage;