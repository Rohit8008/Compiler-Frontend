import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Navbar from './components/Navbar'
import AuthForm from './components/AuthForm'
import Profile from './pages/Profile'
import Home from './components/Home'

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
          <Navbar />
          <Routes>
            <Route path="/auth" element={<AuthForm />} />
            <Route path="/" element={<Home/>} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
