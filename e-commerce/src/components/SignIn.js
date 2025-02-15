import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Auth.css";

const SignUp = ({ toggleForm }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.some((user) => user.email === formData.email)) {
      alert("Email already registered!");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Sign-up successful!");

    // Auto-login after sign-up
    localStorage.setItem("loggedInUser", JSON.stringify(formData));
    navigate("/"); // Redirect to homepage
    window.location.reload(); // Refresh to update header UI
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
      <p className="toggle-text">
        Already have an account? <span onClick={toggleForm}>Login</span>
      </p>
    </div>
  );
};

export default SignUp;
