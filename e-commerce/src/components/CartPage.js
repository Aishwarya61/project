import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/CartPage.css";

const CartPage = ({ updateCart }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      const userCart = JSON.parse(localStorage.getItem(`cart_${loggedInUser.email}`)) || [];
      setCart(userCart);
    }
  }, []);

  // Function to update quantity
  const handleQuantityChange = (product, quantity) => {
    if (quantity < 1) return;
    const updatedCart = cart.map((item) =>
      item.name === product.name ? { ...item, quantity } : item
    );
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Function to remove item from cart
  const handleRemove = (productName) => {
    const updatedCart = cart.filter((item) => item.name !== productName);
    setCart(updatedCart);
    saveCartToLocalStorage(updatedCart);
  };

  // Save cart to localStorage for the logged-in user
  const saveCartToLocalStorage = (cartData) => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      localStorage.setItem(`cart_${loggedInUser.email}`, JSON.stringify(cartData));
    }
  };

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, item) => total + parseInt(item.discount_price.replace(/₹|,/g, "")) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              {/* Product Image */}
              <div className="cart-image">
                <img src={item.image} alt={item.name} />
              </div>

              {/* Product Details */}
              <div className="cart-details">
                <h3 className="cart-product-name">{item.name}</h3>
                <p className="cart-price">Price: {item.discount_price}</p>

                {/* Quantity Selector */}
                <div className="quantity-selector">
                  <button onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</button>
                </div>

                {/* Remove Button */}
                <button className="remove-button" onClick={() => handleRemove(item.name)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Cart Summary */}
      {cart.length > 0 && (
        <div className="cart-summary">
          <h3>Total: ₹{totalPrice.toLocaleString()}</h3>
          <button className="checkout-button" onClick={() => navigate("/payment",{state:{cart}})}>
            Proceed to Buy
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
