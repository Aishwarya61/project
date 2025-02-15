import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";

const Login = ({ toggleForm ,onLoginSuccess}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });
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
    alert("Login successful!");

    if (onLoginSuccess) { 
      localStorage.setItem("loggedInUser", JSON.stringify(user));
localStorage.setItem("userToken", "your-auth-token"); // Simulating token

window.dispatchEvent(new Event("storage"));  // ✅ Use the destructured prop directly
      onLoginSuccess();
    } else {
      navigate("/");
    }
  } else {
    alert("Invalid email or password!");
  }
};
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={handleSubmit}> {/* Only handleSubmit here */}
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
        <button type="submit">Login</button> {/* Remove onClick */}
      </form>
      <p className="toggle-text">
        Don't have an account? <span onClick={toggleForm}>Sign Up</span>
      </p>
    </div>
  );
};

export default Login;