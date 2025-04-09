import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AuthForm from '../components/auth/AuthForm';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import PropertyDashboard from '../components/dashboard/PropertyDashboard';
import ProtectedRoute from '../components/ProtectedRoute';

const AppContent = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/auth" element={<AuthForm />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <PropertyDashboard />
            </ProtectedRoute>
          } />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {!isDashboard && <Footer />}
    </div>
  );
};

export default AppContent; 