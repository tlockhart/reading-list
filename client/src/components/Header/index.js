import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
            <li className="nav-item">
              <Link 
                to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link inactive"}>
                <p className="icon">Google Books Search</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link inactive"}>
                <p className="icon">Search</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/saved" 
                className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link inactive"}>
                  <p className="icon">Saved</p>
              </Link>
            </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;

