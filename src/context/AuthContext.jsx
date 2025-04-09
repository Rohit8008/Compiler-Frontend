import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from '../config/axios';

// Create the context
const AuthContext = createContext(null);

// Create a custom hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Create the provider component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      console.log("Checking auth status...");
      const { data } = await axios.post('/api/auth/is-auth');
      console.log("Auth check response:", data);
      if (data.success) {
        // If the backend doesn't return user data in is-auth, we need to fetch it separately
        if (!data.user) {
          try {
            const userResponse = await axios.get('/api/user/profile');
            console.log("User profile response:", userResponse.data);
            if (userResponse.data.success) {
              setUser(userResponse.data.user);
            }
          } catch (error) {
            console.error("Failed to fetch user profile:", error);
          }
        } else {
          setUser(data.user);
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      console.log("Attempting login with:", email);
      const { data } = await axios.post('/api/auth/login', { email, password });
      console.log("Login response:", data);
      
      if (data.success) {
        // If the backend doesn't return user data in login response, we need to fetch it separately
        if (!data.user) {
          try {
            const userResponse = await axios.get('/api/user/profile');
            console.log("User profile after login:", userResponse.data);
            if (userResponse.data.success) {
              setUser(userResponse.data.user);
            }
          } catch (error) {
            console.error("Failed to fetch user profile after login:", error);
          }
        } else {
          setUser(data.user);
        }
        return { success: true };
      }
      return { success: false, message: data.message };
    } catch (error) {
      console.error("Login error:", error);
      return { success: false, message: error.response?.data?.message || 'Login failed' };
    }
  };

  const register = async (name, email, password) => {
    try {
      console.log("Attempting registration with:", email);
      const { data } = await axios.post('/api/auth/register', { name, email, password });
      console.log("Registration response:", data);
      
      if (data.success) {
        // If the backend doesn't return user data in register response, we need to fetch it separately
        if (!data.user) {
          try {
            const userResponse = await axios.get('/api/user/profile');
            console.log("User profile after registration:", userResponse.data);
            if (userResponse.data.success) {
              setUser(userResponse.data.user);
            }
          } catch (error) {
            console.error("Failed to fetch user profile after registration:", error);
          }
        } else {
          setUser(data.user);
        }
        return { success: true };
      }
      return { success: false, message: data.message };
    } catch (error) {
      console.error("Registration error:", error);
      return { success: false, message: error.response?.data?.message || 'Registration failed' };
    }
  };

  const logout = async () => {
    try {
      console.log("Attempting logout");
      const { data } = await axios.post('/api/auth/logout');
      console.log("Logout response:", data);
      setUser(null);
      return { success: true };
    } catch (error) {
      console.error("Logout error:", error);
      return { success: false, message: error.response?.data?.message || 'Logout failed' };
    }
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
} 