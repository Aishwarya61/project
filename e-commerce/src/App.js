import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Category from "./components/Category";
import ProductDetail from "./components/ProductDetail";
import ProductList from "./components/ProductList";
// import SignUp from "./components/SignIn";
// import Login from "./components/Login";
import CartPage from "./components/CartPage";
import PaymentPage from "./components/PaymentPage";
import OrderSuccess from "./components/OrderSuccess";
import Footer from './components/Footer';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import About from './components/About';
import Contact from './components/Contact';
import Careers from './components/Careers';
import FAQ from './components/FAQ';
import Help from './components/Help';
import Shipping from './components/Shipping';
import Returns from './components/Returns';
import AuthPage from "./components/AuthPage";
// import Privacy from './components/Privacy';
// import Terms from './components/Terms';

const App = () => {
  const location = useLocation();

  // Load cart from localStorage on initial render
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [products, setProducts] = useState([]);

  // Fetch product data
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Aishwarya61/my-ecommerce-dataset/refs/heads/main/updated_products2.json"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Save cart state to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Function to add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    console.log("Added to cart:", product);
  };

  // Function to update the cart (used in CartPage)
  const updateCart = (newCart) => {
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]); // Clears the cart after payment
  };

  console.log("Cart state in App.js:", cart);

  return (
    <>
      <Header cart={cart} />
      {location.pathname === "/" && <Banner />}
      <main>
        <Routes>
          <Route path="/" element={<Category />} />
          <Route path="/category/:category" element={<ProductList products={products} />} />
          <Route path="/search/:searchQuery" element={<ProductList />} />
          <Route path="/product/:productName" element={<ProductDetail addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} updateCart={updateCart} />} />
          <Route path="/payment" element={<PaymentPage cart={cart} clearCart={clearCart} />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          {/* <Route path="/signin" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> */}
          <Route path="/about" element = {<About/>}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/careers" element={<Careers />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/help" element={<Help />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/auth" element={<AuthPage />} />
          {/*<Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
