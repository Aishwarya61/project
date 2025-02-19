import React from "react";
import "../css/Banner.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div id="homepage-banner" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button
          type="button" data-bs-target="#homepage-banner" data-bs-slide-to="0" className="active" aria-current="true"aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#homepage-banner" data-bs-slide-to="1" aria-label="Slide 2" ></button>
        <button type="button" data-bs-target="#homepage-banner" data-bs-slide-to="2" aria-label="Slide 3" ></button>
      </div>

      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/smartphones/galaxy-s23-fe/buy/1stkvdesk.jpg"
            className="d-block w-100 banner-image"
            alt="Slide 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Big Deals on All Samsung Mobiles!</h5>
            <p>Shop the latest Mobile at unbeatable prices.</p>
            <button className="btn btn-primary" onClick={() => navigate("/category/mobile")}>Show More</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="https://genarc.lk/wp-content/uploads/2024/06/Anker-Soundcore-Space-Q45-ANC-Headphones-Banner-01-GenArc-Sri-Lanka.png.webp"
            className="d-block w-100 banner-image"
            alt="Slide 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Best deals on Headphones Grab now!</h5>
            <p>Upgrade your wardrobe with trendy collections.</p>
            <button className="btn btn-primary"  onClick={() => navigate("/category/headphones")}>Explore</button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img
            src="https://aws-obg-image-lb-4.tcl.com/content/dam/brandsite/region/in/product/tv/s/s4500a/s4500a-kv-pc-0612.jpg?t=1718159555531&w=2560&webp=true&dpr=2.625&rendition=1068"
            className="d-block w-100 banner-image"
            alt="Slide 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Big Sale on Samsung Television</h5>
            <p>Discover unbeatable deals on Television.</p>
            <button className="btn btn-primary" onClick={() => navigate("/category/tv")}>Check Now</button>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#homepage-banner"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#homepage-banner"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;
