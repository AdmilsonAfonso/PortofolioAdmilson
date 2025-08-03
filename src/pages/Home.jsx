import React from 'react'
import { Head } from '../componentes/Head'
import { Inicio } from '../componentes/Inicio/Inicio'
import './home.css'
import ParticlesSection from '../componentes/ParticlesBackground'
import TecnologiasCarousel from '../componentes/Habilidades/TecnologiasCarousel'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Projetos from '../componentes/projectos/Projectos'
import { Sobre } from '../componentes/sobre/Sobre'
import { Habilidades } from '../componentes/Habilidades/Habilidade'
import { Contato } from '../componentes/contactos/Contacto'
import { Footer } from '../componentes/footer/Footer'



export const Home = () => {
  return (
    <div>
        <Head/>

       <div id="inicio">
         <Inicio />
      </div>

        <TecnologiasCarousel/>

       <div id="projectos">
        <Projetos />
      </div>

      <div id="sobre">
        <Sobre />
      </div>

      <div id="habilidades">
        <Habilidades />
      </div>

      <div id="contato">
        <Contato />
      </div>
      
        <Footer/>
    </div>
  )
}
