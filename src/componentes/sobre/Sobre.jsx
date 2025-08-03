import React from 'react'
import './sobre.css'
import { Redes } from '../redes/Redes'
import s from '../../assets/sobre.jpg'


export const Sobre = () => {
  return (


    
    <div className='sobre' >
        <h1 className='h1-sobre'>Sobre</h1><br/>
        <div  className='sobre-item'>
           <aside className='texto-obre'>
                <p>Com mais de 4 anos de experiência em desenvolvimento de software, atuo na criação de sistemas completos — do 
                    backend robusto ao frontend responsivo. Já desenvolvi`
                    desde painéis administrativos e sistemas de gestão até aplicativos móveis com integração em tempo real.</p>
                <p>Busco sempre entregar código limpo, soluções inteligentes e resultados de impacto para empresas e usuários.</p>
                <Redes/>
           </aside>
           <aside className='texto-obre'>
             <img src={s} alt="" />
           </aside>
        </div>
    </div>
  )
}
