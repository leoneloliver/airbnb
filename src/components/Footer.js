import React from "react";
import { FaHeart } from 'react-icons/fa';
import { SiBuymeacoffee } from 'react-icons/si';

function Footer() {
  // const currentYear = new Date().getFullYear();
  return (
    <footer className="shadow-sm">
      <p>Made with <SiBuymeacoffee className="coffee"/> + <FaHeart className="heart"/> by <a href="https://leo-frontend.netlify.app/" rel="noopener noreferrer" target="_blank">Leonel Oliveira</a></p>
    </footer>
  );
}

export default Footer;