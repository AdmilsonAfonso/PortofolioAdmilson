import React from 'react'
import './footer.css'


export const Footer = () => {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Admilson Afonso. Todos os direitos reservados.
      </p>
      <p className="footer-frase">
        Feito com ❤️ usando React, paixão por código e dedicação por transformar ideias em soluções reais.
      </p>
    </footer>
  );
};
