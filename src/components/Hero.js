import React from "react";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="jumbotron">
      <div className="container rounded">
        <h1 className="display-4 main-title">WELCOME HOME</h1>
        <p className="lead">Find the best place to stay.</p>
        <hr className="my-4" />
        <p>Unique places to stay from local hosts in 190+ countruies.</p>
        <Link to="/adm" className="btn btn-primary btn-lg air-btn" role="button">Add Houses</Link>
      </div>
    </div>
  );
}

export default Hero;
