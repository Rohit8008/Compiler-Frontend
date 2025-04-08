import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthForm from './components/AuthForm'
import Profile from './components/Profile'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthForm />} />
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
