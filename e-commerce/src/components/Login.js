import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";

const Login = ({ toggleForm, onLoginSuccess }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState(""); // State for success/error message
  const [isSuccess, setIsSuccess] = useState(false); // To differentiate success from error
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    if (user) {
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      localStorage.setItem("userToken", "your-auth-token"); // Simulating token
      window.dispatchEvent(new Event("storage"));

      setMessage("Login successful!"); // ✅ Show success message
      setIsSuccess(true); 

      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        setTimeout(() => navigate("/"), 1000); // Redirect after delay
      }
    } else {
      setMessage("Invalid email or password!"); // ❌ Show error message
      setIsSuccess(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        <button type="submit" className="login-button">Login</button> 
      </form>

      {/* ✅ Message below the form */}
      {message && (
        <p className={`login-message ${isSuccess ? "success" : "error"}`}>{message}</p>
      )}

      <p className="toggle-text">
        Don't have an account? <span onClick={toggleForm}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;
