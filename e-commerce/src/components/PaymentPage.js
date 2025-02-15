import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/PaymentPage.css";
// import { useLocation } from "react-router-dom";


const PaymentPage = ({ cart, clearCart }) => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const singleProductCart = location.state?.cart || cart;
  const handlePayment = () => {
    // Simulate payment success
    clearCart(); // Clear the cart
    navigate("/order-success"); // Navigate to success page
  };

  // Sample Address (Replace with real user address if available)
  const userAddress = {
    name: "Aishwarya Iyer",
    street: "50/765 Sargam Appt Sola Road Naranpura",
    city: "Ahmedabad",
    state: "Gujarat",
    zip: "3900541",
    country: "INDIA",
    phone: "+91 9998093527",
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.discount_price.replace(/₹|,/g, "")) * item.quantity,
    0
  );

  return (
    <div className="payment-container">
      {/* Delivery Address */}
      <div className="address-box">
        <h2>Delivery Address</h2>
        <p><strong>{userAddress.name}</strong></p>
        <p>{userAddress.street}</p>
        <p>{userAddress.city}, {userAddress.state} - {userAddress.zip}</p>
        <p>{userAddress.country}</p>
        <p><strong>Phone:</strong> {userAddress.phone}</p>
      </div>

      {/* Item Summary */}
      <div className="summary-box">
        <h2>Item Summary</h2>
        {cart.map((item, index) => (
          <div key={index} className="summary-item">
            <p>
              {item.name} ({item.discount_price} x {item.quantity})
            </p>
            <p className="summary-price">₹{(parseInt(item.discount_price.replace(/₹|,/g, "")) * item.quantity).toLocaleString()}</p>
          </div>
        ))}
        <hr />
        <div className="total-amount">
          <p>Total</p>
          <p className="summary-price">₹{totalPrice.toLocaleString()}</p>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="payment-methods">
        <h2>Choose your payment method</h2>
        <div className="payment-options">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Visa_Logo_%282005-2014%29.svg" alt="Visa" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="MasterCard" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" />
        </div>

        {/* Amazon Payment Option */}
        <div className="amazon-payment">
          <input type="radio" name="payment" id="amazon" />
          <label htmlFor="amazon">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Pay" />
            <div>
              <h3>Amazon</h3>
              <p>Pay securely using your Amazon account.</p>
            </div>
          </label>
        </div>

        {/* Pay with Amazon Button */}
        <div className="amazon-pay-button">
          <button className="btn btn-warning"  onClick={async () => {
            try {
              await handlePayment();
              navigate("/order-success");
            } catch (error) {
              // Optional: Handle errors that might occur *outside* of handlePayment
              console.error("Error in onClick:", error);
            }
          }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Logo" />
            Pay with Amazon
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage; 