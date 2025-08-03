import React, { useState,useEffect } from 'react'
import './head.css'



export const Head = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className={`headBody ${scrolled ? "headScrolled" : ""}`}>
      <h1>Admilson Kafelando AFonso</h1>

      {/* Botão hambúrguer visível só em telas pequenas */}
      <div className="menuToggle" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"}
      </div>

      <ul className={`componentHead ${menuOpen ? "active" : ""}`}>
        <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
        <li><a href="#projectos" onClick={() => setMenuOpen(false)}>Projectos</a></li>
        <li><a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
        <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contacto</a></li>
      </ul>
    </div>
  );
};

