import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <nav className="navbar navbar-expand-md navbar-dark fixed-top text-center">
      {/* <a className="navbar-brand" href="/">
        React Reading List
      </a> */}
      <ul className="navbar-nav">
          <li className="brand nav-item">
            <Link 
              to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link inactive"}>
              {/* <a href="/"> */}
              <p className="icon">Google Books Search</p>
              {/* </a> */}
            </Link>
          </li>
          <li className="nav-item">
            {/* <a href="/"> */}
            <Link 
              to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link inactive"}>
              <p className="icon">Search</p>
            {/* </a> */}
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/saved" 
              className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link inactive"}>
              {/* <a href="/"> */}
                <p className="icon">Saved</p>
              {/* </a> */}
            </Link>
          </li>
      </ul>
    </nav>
  );
}

export default Nav;

// import React from 'react';


// function Header(props){
//     return (
//         <React.Fragment>
//             <nav className="navbar navbar-expand-md navbar-dark fixed-top text-center">
//                 <ul className="navbar-nav mx-auto">
//                     <li className="brand nav-item"><a href="/"><h3 className="icon">@</h3></a></li>
//                     <li className="nav-item"><p className="instructions" id="msg">Click an image to begin!</p></li>
//                     <li className="nav-item"><h3 className="score">Score: {props.score} | Top Score: {props.topScore}</h3> </li>
//                 </ul>
//             </nav> 
//             <header className="header"></header>
//         </React.Fragment>
                   
//     )
// }

// export default Header;

