import React, { useState } from 'react'
import "./login.css"
import { ApiLogin } from '../api/ApiPub'
import { useNavigate } from 'react-router-dom';

export const Login = ({setLogin}) => {

    const navigate = useNavigate()
    const [ inputs, setInputs] = useState({})


     const handleSubmit =async(e)=>{
         e.preventDefault();
        try {
             var resposta = await ApiLogin.post('/login',inputs, {
            headers:{
                "Content-Type":"application/json"
            }
        })

        const token = resposta.data.token;
        localStorage.setItem("token", token);  // <-- SALVA O TOKEN
      
        navigate("/")  
          
        console.log("login feito com sucesso")
        } catch (error) {
            console.log(error)}
     }


     const handleChange= async(e)=>{
        e.preventDefault()
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values=>({...values,[name]:value}))
     }



    const Onclose =()=>{
        setLogin(false)
    }
  return (
    <div className="login-container">
      <div className="login-box">
        <form action="" onSubmit={handleSubmit}>
            <p onClick={Onclose} style={{textAlign:"end", cursor:"pointer"}}>X</p>
            <h2 className="login-title">Entrar</h2>
            <input name='nome' onChange={handleChange} value={inputs.nome || ""}
             type="text" placeholder="Nome de usuário" className="login-input" />
            <input  name='senha' onChange={handleChange} value={inputs.senha || ""} type="password" placeholder="Senha" className="login-input" />
            <button className="login-button">Login</button>
        </form>
        
      </div>
    </div>
  )
}
