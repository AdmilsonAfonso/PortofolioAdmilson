import React, { useState } from 'react'
import './head.css'
import { FiSearch } from 'react-icons/fi'
import { Login } from '../pages/Login'



export const Head = () => {
  const [login, setLogin] = useState(false)

  const handleLogin=()=>{
    setLogin(true)
  }
  return (
    <div className='headBody'>
            <h1>PENSAMENTOS</h1>

            <div className="pesq-div">
              <input className='pesquisarText' type="text" placeholder='pesquisar por nome, categoria....'/>
              <FiSearch className='btn-pesquisar'/>
           </div>
        
            <ul className='componentHead'>
                <li onClick={handleLogin}>LOGIN</li>
            </ul>

            {
              login && (
                <div className='modal-login'>
                  <Login setLogin={setLogin}/>
                </div>
              )
            }
    </div>
  )
}
