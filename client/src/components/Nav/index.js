import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top text-center">
      <ul className="navbar-nav">
          <li className="brand nav-item">
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
    </nav>
  );
}

export default Nav;

