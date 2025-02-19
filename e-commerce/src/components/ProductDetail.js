import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/ProductDetail.css";

const ProductDetail = ({ addToCart }) => {
  const { productName } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Aishwarya61/my-ecommerce-dataset/refs/heads/main/updated_products2.json"
        );
        const data = await response.json();
        const foundProduct = data.find((item) => item.name === decodeURIComponent(productName));
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productName]);

  const handleAddToCart = () => {
    const isLoggedIn = !!localStorage.getItem("userToken"); // Check if logged in
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    console.log("User Token:", isLoggedIn);
  console.log("Logged In User:", loggedInUser);

    if (!isLoggedIn || !loggedInUser) {
      navigate("/auth", { state: { from: { pathname: window.location.pathname } } });
      return;
    }

    if (!product) return; // Ensure product exists before proceeding

    // Retrieve cart for the logged-in user
    let userCart = JSON.parse(localStorage.getItem(`cart_${loggedInUser.email}`)) || [];

    // Check if the product already exists in the cart
    const existingProduct = userCart.find((item) => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      userCart.push({ ...product, quantity: 1 });
    }

    // Save updated cart in localStorage
    localStorage.setItem(`cart_${loggedInUser.email}`, JSON.stringify(userCart));

    // Optionally update the cart in the parent component
    if (addToCart) {
      setTimeout(() => {
        addToCart(userCart);
        alert("Added to Cart!");
      }, 500);
    }
  };

  const handleBuyNow = () => {
    const isLoggedIn = !!localStorage.getItem("userToken");
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!isLoggedIn || !loggedInUser) {
      // alert("Please log in to proceed with purchase!");
      setTimeout(() => {
        navigate("/auth", { state: { from: { pathname: window.location.pathname } } });
      }, 800);  // ✅ Delaying redirect to make the alert visible
      return;
    }
    
    const orderItem = {
      name: product.name,
      discount_price: product.discount_price, // Pass the full value (string with ₹)
      quantity: 1,
      image: product.image
    };
    navigate("/payment", { state: { cart: [orderItem] } });
   
   
  };

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="product-detail-container">
      {/* Close Button */}
      <div className="product-detail-header">
        <button className="close-button" onClick={() => navigate(-1)}>
          &#10006;
        </button>
      </div>

      {/* Product Content */}
      <div className="product-detail-content">
        {/* Product Image */}
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        {/* Product Information */}
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p><strong>Ratings:</strong> ⭐ {product.ratings} ({product.no_of_ratings} reviews)</p>
          <p><strong>Price:</strong> <span className="discount-price">{product.discount_price}</span></p>
          <p><strong>Original Price:</strong> <del>{product.actual_price}</del></p>

          {/* Features Table */}
          <div className="product-features">
            <h3>Key Features:</h3>
            <table>
              <tbody>
                {Object.entries(product.features).map(([key, value]) => (
                  <tr key={key}>
                    <td className="feature-key">{key}</td>
                    <td className="feature-value">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* About Section */}
          <div className="product-about">
            <h3>About this product:</h3>
            <ul>
              {product.about.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="button-container">
            <button className="buy-button" onClick={handleBuyNow}>Buy Now</button>
            <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
