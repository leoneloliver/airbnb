import React from "react";
import { Link } from 'react-router-dom';
import { FaAirbnb } from 'react-icons/fa';

function Header() {
  return (
    <header className="navbar navbar-dark">
      <div className="container">
        <h1>
          <Link to="/">
            <span>
              <FaAirbnb/>
            </span>
            <span className="logo-text">airbnb</span> 
          </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
