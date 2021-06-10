import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="navbar navbar-dark">
      <div className="container">
        <h1>
          <Link to="/"><i className="fa fa-heart-o fa-free-code-camp" aria-hidden="true"></i>&nbsp;heartbnb </Link>
        </h1>
      </div>
    </header>
  );
}

export default Header;
