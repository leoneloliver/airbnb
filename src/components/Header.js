import React from "react";
import { Link } from 'react-router-dom';
import { FaAirbnb, FaRegUserCircle} from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';

function Header() {
  return (
    <header className="navbar navbar-dark" id="nav-home">
      <div className="container">
        <h1>
          <Link to="/">
            <span>
              <FaAirbnb/>
            </span>
            <span className="logo-text">airbnb</span> 
          </Link>
        </h1>
        <Link to="/adm">
          <div className="user-container" id="user">
            <IoIosMenu className="mr-1"/><FaRegUserCircle/>
          </div>
        </Link>
        
      </div>
    </header>
  );
}

export default Header;
