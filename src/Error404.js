import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function Error404() {

return (
  <div className="App pb-5">
    <Header />
        <div className="alert alert-danger" role="alert">
            404 Page Not Found
        </div>
    <Footer />
  </div>
  );
}