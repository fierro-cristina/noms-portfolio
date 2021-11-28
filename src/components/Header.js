import "../styles/Header.css";
import React from "react";

function Header({ className }) {
  return (
    <div className={className}>
      <a href="#presentation" className="header-link">
        Inicio
      </a>
      <a href="#" className="header-link">
        Sobre Nosotros
      </a>
      <a href="#" className="header-link">
        Especialidades
      </a>
      <a href="#" className="header-link">
        Combos
      </a>
    </div>
  );
}

export default Header;
