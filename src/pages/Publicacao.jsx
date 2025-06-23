import React, { useEffect, useState } from 'react'
import './publicacao.css'
import { FiHeart, FiMessageCircle } from 'react-icons/fi'
import { ApiPub } from '../api/ApiPub'
import { Comentario } from './Comentario'

export const Publicacao = () => {

    const[listaPub, setlistaPub] = useState([])
    const[comentario, setComentario] = useState([])
    const[comentarioEst, setComentarioEst] = useState(false)

    async function Publicacoes() {
        try {
            const resposta = await ApiPub.get('')
            setlistaPub(resposta.data)

            const todosComentarios = resposta.data.flatMap(pub => pub.comentarios || []);
           setComentario(todosComentarios)
            
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(()=>{
        Publicacoes()
    }, [])
    

    const OnComentario=()=>{
        setComentarioEst(true)
    }



    const [post, setPost] = useState('')

    const handleSubmit = async(e) =>{
        const token = localStorage.getItem("token");
        e.preventDefault()
        try {
            const publicar = await ApiPub.post("",{ post: post },{
                headers:{
                    Authorization: `Bearer ${token}`, 
                    "Content-Type":"application/json"
                }
            })
            
        } catch (error) {
            console.log(error)
        }
    }
    


  const [likes, setLikes] = useState(30); // valor inicial

  
  const handleLike = () => {
      setLikes(likes + 1);
  };

  return (
    <div className='publicacaoBody'>
        <aside></aside>

        <aside className='publicacaoAside'>
            <div className='texto'>
                <textarea value={post} onChange={(e)=>setPost(e.target.value)} className='publicarInp' required/>
                <button onClick={handleSubmit}>Postar</button>
            </div>

            {

                listaPub.length == 0? <p>Carregando...</p>:(
                    listaPub.map((pub, index)=>(

                        <div className='publicacao' key={index}>
                                <span >{pub.autor.nome}</span>
                                <p>{pub.post}</p>
                                
                             
                                <nav className='btns'>
                                    <span onClick={handleLike} style={{color: likes ? 'red' : 'gray' }}>
                                            <FiHeart className='btn-like' /> {likes}
                                     </span>
                                    <FiMessageCircle className='btn-comentario' onClick={OnComentario} />
                                </nav>

                                {comentarioEst &&(
                                    <div className="modal-editar"> 
                                        <Comentario setComentarioEst={setComentarioEst} comentarios={comentario} />
                                    </div>
                                )}
                                
                       </div>


                    ))
                )
            }

        </aside>

        <aside></aside>
    </div>
  )
}
