import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Coppyright © {currentYear} | Leonel Oliveira</p>
    </footer>
  );
}

export default Footer;