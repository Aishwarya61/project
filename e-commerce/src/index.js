import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Dropdown } from "bootstrap";
// Only include necessary Bootstrap styles and scripts
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel/slick/slick.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

document.addEventListener("DOMContentLoaded", function () {
  let dropdownElementList = [].slice.call(document.querySelectorAll(".dropdown-toggle"));
  dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl);
  });
});


reportWebVitals();
