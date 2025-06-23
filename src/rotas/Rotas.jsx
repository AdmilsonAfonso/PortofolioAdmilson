import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Home } from '../pages/Home'

export const Rotas = () => {
  return (
    <BrowserRouter>

    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route></Route>
    </Routes>
    
    
    
    </BrowserRouter>
  )
}
