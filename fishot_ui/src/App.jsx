import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/home'
import Welcome from './pages/welcome'
import Analytics from './pages/Analytics'
import Control from './pages/Control'
import Login from './pages/Login'
import Register from './pages/Register'
import Logout from './pages/Logout'
import Panel from './pages/Panel'
import Settings from './pages/Settings'
import Video from './pages/Video'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/panel' element={<Panel />} />
        <Route path='/video' element={<Video />} />
        <Route path='/control' element={<Control />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
