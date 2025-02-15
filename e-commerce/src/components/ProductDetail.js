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
  // const isLoggedIn = !!localStorage.getItem("userToken");
  const handleAddToCart = () => {
    const isLoggedIn = !!localStorage.getItem("userToken"); // Check dynamically
    if (!isLoggedIn) {
    
      navigate("/auth", { state: { from: { pathname: window.location.pathname } } });
      return;
    }
    addToCart(product);
  };
  
  const handleBuyNow = () => {
    const isLoggedIn = !!localStorage.getItem("userToken"); // Check dynamically
    if (!isLoggedIn) {
   
      navigate("/auth", { state: { from: { pathname: window.location.pathname } } });
      return;
    }
    navigate("/payment", { state: { cart: [product] } });
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
          
          {/* Ratings Section */}
          <p><strong>Ratings:</strong> ⭐ {product.ratings} ({product.no_of_ratings} reviews)</p>

          {/* Pricing Section */}
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

          {/* Buttons in One Line */}
          <div className="button-container">
        <button
          className="buy-button"
          onClick={handleBuyNow}
        >
          Buy Now
        </button>
        <button
          className="add-to-cart-button"
          onClick={handleAddToCart} // Conditional onClick
        >
          Add to Cart
        </button>
        {/* {!isLoggedIn && (
          <p className="login-message">
            Please <a href="/auth">login</a> to continue.
          </p>
        )} */}
    
      </div>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;  