import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../css/ProductList.css";

const ProductList = () => {
  const { category, searchQuery } = useParams();
  const navigate = useNavigate();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Aishwarya61/my-ecommerce-dataset/refs/heads/main/updated_products2.json"
        );
        const data = await response.json();

        let filtered = data;

        if (category && category !== "all") {
          filtered = filtered.filter(
            (product) =>
              product.classified_category.toLowerCase() === category.toLowerCase()
          );
        }

        if (searchQuery) {
          filtered = filtered.filter((product) =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }

        setFilteredProducts(filtered);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category, searchQuery]);

  if (loading) {
    return <p className="loading-message">Loading products...</p>;
  }

  return (
    <div className="product-container">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <p className="product-name" title={product.name}>{product.name}</p>
            <p className="product-price">{product.discount_price}</p>
            <button
              className="view-details"
              onClick={() => navigate(`/product/${encodeURIComponent(product.name)}`)}
            >
              View Details
            </button>
          </div>
        ))
      ) : (
        <p className="no-products-message">No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
