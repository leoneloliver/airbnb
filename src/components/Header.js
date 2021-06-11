import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-dark">
      <div className="container">
        <h1>
          <Link to="/">
            <span>
              <i className="fa fa-heart-o fa-free-code-camp" aria-hidden="true"></i>
            </span>
            <i className="circle-logo">o</i>
            <span className="logo-text">airbnb</span> 
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
