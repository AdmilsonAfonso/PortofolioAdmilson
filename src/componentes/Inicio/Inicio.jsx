import React from 'react'
import './inicio.css'
import ParticlesBackground from '../ParticlesBackground'
import { Redes } from '../redes/Redes'

export const Inicio = () => {
  return (
    <div className='body-inicio'> 
  
        <main className='main-inicio'>
                <section className='section-ini left'>
                    <div className="titulo">
                          <h2 className='h2-titulo'>Desenvolvedor Full-Stack</h2>
                    </div>
                      <div className="contactos-titulo">
                            <Redes/>
                      </div>
                 </section>

                <section className='section-ini '>
                        <h2 className='h2-section-rigth'>Sou um desenvolvedor web apaixonado por transformar ideias em soluções digitais funcionais e criativas.</h2>
                        <h2 className='h2-section-rigth' >Estou sempre em busca de novos desafios e oportunidades para evoluir.</h2>
                </section>    
        </main>

    </div>
  )
}
