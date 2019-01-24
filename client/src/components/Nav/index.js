import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="custom-navbar navbar-expand-md navbar-dark fixed-top">
      <ul className="custom-navbar-nav">
          <li className="brand custom-nav-item">
            <Link 
              to="/" className={window.location.pathname === "/" ? "custom-nav-link active" : "custom-nav-link inactive"}>
              <p className="icon">Google Books Search</p>
            </Link>
          </li>
          <li className="custom-nav-item">
            <Link 
              to="/" className={window.location.pathname === "/" ? "custom-nav-link active" : "custom-nav-link inactive"}>
              <p className="icon">Search</p>
            </Link>
          </li>
          <li className="custom-nav-item">
            <Link 
              to="/saved" 
              className={window.location.pathname === "/saved" ? "custom-nav-link active" : "custom-nav-link inactive"}>
                <p className="icon">Saved</p>
            </Link>
          </li>
      </ul>
    </nav>
  );
}

export default Nav;

