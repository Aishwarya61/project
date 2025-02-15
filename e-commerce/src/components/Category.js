// Category.js
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../css/Category.css";

function Category() {
  const [productSections, setProductSections] = useState({
    Mobile: [],
    Printer: [],
    Speakers: [],
  });
  const carouselRefs = useRef({});

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Aishwarya61/my-ecommerce-dataset/refs/heads/main/updated_products2.json"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        const sections = {
          Mobile: data.filter((item) => item.classified_category === "mobile").slice(0, 20),
          Printer: data.filter((item) => item.classified_category === "laptop").slice(0, 20),
          Speakers: data.filter((item) => item.classified_category === "headphones").slice(0, 20),
        };

        setProductSections(sections);
      } catch (error) {
        console.error("Error fetching or processing data:", error);
      }
    };

    fetchProducts();
  }, []);

  const scrollLeft = (sectionName) => {
    const ref = carouselRefs.current[sectionName];
    if (ref) {
      ref.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = (sectionName) => {
    const ref = carouselRefs.current[sectionName];
    if (ref) {
      ref.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="category-section">
      {Object.entries(productSections).map(([sectionName, products]) => (
        <div className="category-group" key={sectionName}>
          <h2>{sectionName}</h2>
          <div className="category-carousel-container">
            <button
              className="arrow-button left-arrow"
              onClick={() => scrollLeft(sectionName)}
            >
              &#9664;
            </button>
            <div
              className="category-carousel"
              ref={(el) => (carouselRefs.current[sectionName] = el)}
            >
              {products.map((item, index) => (
                <div key={index} className="category-card">
                  <img src={item.image} alt={item.name} />
                  <p>Price: {item.discount_price}</p>
                  <Link
                    to={`/product/${encodeURIComponent(item.name)}`}
                    className="view-details-button"
                  >
                    View Details
                  </Link>
                </div>
              ))}
            </div>
            <button
              className="arrow-button right-arrow"
              onClick={() => scrollRight(sectionName)}
            >
              &#9654;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Category;