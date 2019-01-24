import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const linkStyle = {
  color: 'white',
  textdecoration: 'none'
};

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link style={ linkStyle }
              className="navbar-brand" to="/">
              Google Books
            </Link>
          </li>
          <li className="nav-item">
            <Link style={ linkStyle }
              to="/search"
              className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
            >
              Search
            </Link>
          </li>
          <li className="nav-item">
            <Link style={ linkStyle }
              to="/saved"
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"}
            >
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
