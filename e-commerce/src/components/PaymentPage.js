import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/PaymentPage.css";
import { useLocation } from "react-router-dom";

const PaymentPage = ({ cart: cartProp, clearCart }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const userName = loggedInUser ? loggedInUser.name : "Guest";
  const cart = location.state?.cart || cartProp || [];
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handlePayment = () => {
    clearCart(); // Clear the cart
    navigate("/order-success"); // Navigate to success page
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({
      ...cardDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form validation for credit card details

    // For now, just print the card details and proceed with payment
    console.log("Card Details Submitted: ", cardDetails);

    // After successful validation, proceed to payment
    handlePayment();
  };

  const userAddress = {
    name: userName,
    street: "50/765 Sargam Appt Sola Road Naranpura",
    city: "Ahmedabad",
    state: "Gujarat",
    zip: "3900541",
    country: "INDIA",
    phone: "+91 9998093527",
  };

  const totalPrice = cart.reduce((total, item) => {
    const price = item.discount_price ? parseInt(item.discount_price.replace(/₹|,/g, "")) : 0;
    return total + price * (item.quantity || 1);
  }, 0);

  return (
    <div className="payment-container">
       <h1 className="payment-title">Payment</h1> 
      <div className="address-box">
        <h2>Delivery Address</h2>
        <p>
          <strong>{userAddress.name}</strong>
        </p>
        <p>{userAddress.street}</p>
        <p>
          {userAddress.city}, {userAddress.state} - {userAddress.zip}
        </p>
        <p>{userAddress.country}</p>
        <p>
          <strong>Phone:</strong> {userAddress.phone}
        </p>
      </div>

      <div className="summary-box">
        <h2>Item Summary</h2>
        {cart.map((item, index) => (
          <div key={index} className="summary-item">
            <p>
              {item.name} ({item.discount_price} x {item.quantity})
            </p>
            <p className="summary-price">
              ₹
              {(
                parseInt(item.discount_price.replace(/₹|,/g, "")) *
                item.quantity
              ).toLocaleString()}
            </p>
          </div>
        ))}
        <hr />
        <div className="total-amount">
          <p>Total</p>
          <p className="summary-price">₹{totalPrice.toLocaleString()}</p>
        </div>
      </div>

      <div className="payment-methods">
        <h2>Enter Your Credit Card Details</h2>
        <form onSubmit={handleSubmit} className="credit-card-form">
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 1234 5678"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="expiryDate">Expiry Date (MM/YY)</label>
            <input
              type="text"
              id="expiryDate"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleChange}
              placeholder="MM/YY"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cvv">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={cardDetails.cvv}
              onChange={handleChange}
              placeholder="123"
              required
            />
          </div>

          <button type="submit" className="btn btn-warning">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
