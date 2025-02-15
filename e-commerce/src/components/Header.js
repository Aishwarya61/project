import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";
import "../css/Header.css";

const Header = ({ cart = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // useEffect(() => {
  //   const user = JSON.parse(localStorage.getItem("loggedInUser"));
  //   setLoggedInUser(user);
  // }, []);
  useEffect(() => {
    const updateUser = () => {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      setLoggedInUser(user);
    };
  
    updateUser(); 
  
    window.addEventListener("storage", updateUser); // Listen for localStorage changes
  
    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("loggedInUser");
    // window.location.reload(); // Refresh UI
    setLoggedInUser(null);
  };
  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search/${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="header">
      <div className="container-fluid d-flex justify-content-between align-items-center py-2">
        {/* Left Section - Brand Name */}
        <div className="d-flex align-items-center">
          <a href="/" className=" brand-text">
            ElectroX
          </a>
          <svg className="brand-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2L3 14h8l-1 8 10-12h-8z"></path>
          </svg>
        </div>

        {/* Center Section - Unified Search Bar */}
        <div className="search-container">
          <div className="search-bar"> {/* Added search-bar class */}
            {/* Categories Dropdown */}
            <div className="dropdown">
              <button className="dropdown-toggle" type="button" id="categoryDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                All Categories
              </button>
              <ul className="dropdown-menu" aria-labelledby="categoryDropdown">
                <li><NavLink className="dropdown-item" to="/category/laptop">Laptop and accessories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/mobile">Mobile and accessories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/tv">Television and accessories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/headphones">Headphones</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/camera">Camera and accessories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/tablet">Tablet and accessories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/printer">Printer and accessories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/smart-watches">Smart Watches</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/speakers">Speakers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/earpods">Earpods</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/mouse">Mouse</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/keyboard">Keyboard and accessories</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/powerbank">Powerbank</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/mobile-holder">Mobile Holder</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/selfie-stick">Selfie stick</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/batteries">Battery</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/screen-protector">Screen protector</NavLink></li>
                <li><NavLink className="dropdown-item" to="/category/washing-machine">Washing machine</NavLink></li>
              </ul>
            </div>

            {/* Search Input */}
            <input type="text" className="search-input" onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for products..." />

            {/* Search Button */}
            <button className="search-btn" onClick={handleSearch}>
              <i className="bi bi-search"></i>
            </button>
          </div> {/* End of search-bar div */}
        </div>


        {/* Right Section - Location, Cart, and Sign In */}
        <div className="d-flex align-items-center">
          {/* Location */}
          <div className="d-flex align-items-center me-4 location">
            <i className="bi bi-geo-alt me-1"></i>
            <span>Ahmedabad, 380001</span>
          </div>

          {/* Cart Icon with Badge */}
          <Link to="/cart" className="cart-icon">
            <i className="bi bi-cart-fill" style={{marginRight:"20px"}}></i>
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </Link>

          {/* Sign In */}

          {loggedInUser ? (
            <div style={{ position: "relative", textAlign: "center" }}>
              {/* Font Awesome Profile Icon */}
              <i
                className="fas fa-user-circle"
                style={{ fontSize: "40px", cursor: "pointer", color: "white" }}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              ></i>

              {/* User Name Below Profile Icon */}
              <p style={{ margin: "5px 0", fontSize: "14px", color: "white" }}>{loggedInUser.name}</p>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div
                  style={{
                    position: "absolute",
                    top: "60px",
                    right: "0",
                    background: "white",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    width: "120px",
                    textAlign: "center",
                    zindex:1
                  }}
                >
                  <button
                    onClick={handleLogout}
                    style={{
                      background: "none",
                      border: "none",
                      padding: "10px",
                      cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button className="login-btn" onClick={() => navigate("/auth")}>Login</button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;