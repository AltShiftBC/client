import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/home'
import Welcome from './pages/welcome'
import Analytics from './pages/Analytics'
import Control from './pages/Control'
import Login from './pages/Login'
import Register from './pages/Register'
import Panel from './pages/Panel'
import Settings from './pages/Settings'
import Video from './pages/Video'
import Forgot from './pages/Forget'
import Reset from './pages/Reset'

<<<<<<< HEAD



=======
>>>>>>> 9b60b4c62e8b066a7229c29a723cee81212f5431
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
        <Route path='/panel' element={<Panel />} />
        <Route path='/video' element={<Video />} />
        <Route path='/control' element={<Control />} />
        <Route path='/analytics' element={<Analytics />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/forgot' element={<Forgot />} />
        <Route path='/reset' element={<Reset />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
