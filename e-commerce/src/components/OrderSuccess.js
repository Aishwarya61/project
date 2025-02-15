import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/OrderSuccess.css";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <div className="success-box">
        <img
          src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
          alt="Success"
        />
        <h2>Order Placed Successfully!</h2>
        <p>Your payment has been processed, and your order is confirmed.</p>
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};

export default OrderSuccess;
