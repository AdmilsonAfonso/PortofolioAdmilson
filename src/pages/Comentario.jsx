import React from 'react'
import './comentario.css'

  export const Comentario = ({setComentarioEst,comentarios}) => {

    const Onclose =()=>{
          setComentarioEst(false)
      }

      console.log(comentarios)
      
    return (
      <div className='comenBody'>

            <nav className='ponto'>
                    <div className="puInp">
                        <input type="text" name="" id="" />
                        <button>comentar</button>
                    </div>
                      <p className='fechar' onClick={Onclose}>x</p>
            </nav>

            <nav className='segundo'>
              <p>COMENTÁRIOS</p>
              {
                comentarios.map((comentarios,index)=>(
                  <p key={index}> {comentarios.texto}</p>
                )
                
              )

              

              
            }
                     
          </nav>

                
            
           

    </div>
  )
}
