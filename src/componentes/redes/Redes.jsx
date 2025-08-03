import React from 'react'
import './redes.css'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export const Redes = () => {
  return (
    <div className='contactos-titulo'>
          <a className='link-box'
                href="https://github.com/AdmilsonAfonso"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d9fc12ff", margin: "0 10px", fontSize: "1.5rem" }}
              >
                <FaGithub />
              </a>
              <a className='link-box'
                href="https://www.linkedin.com/in/admilson-afonso-47b27931b/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d9fc12ff", margin: "0 10px", fontSize: "1.5rem" }}
              >
                <FaLinkedin />
              </a>
              <a className='link-box'
                href="mailto:admilsonkafelando30@gmail.com"
                target="_blank"
                style={{ color: "#d9fc12ff", margin: "0 10px", fontSize: "1.5rem" }}
              >
                <MdEmail />
              </a>
              <a className='link-box'
                href="https://wa.me/244922343107"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#d9fc12ff", margin: "0 10px", fontSize: "1.5rem" }}
              >
                <FaWhatsapp />
              </a>
        
        
    </div>
  )
}
