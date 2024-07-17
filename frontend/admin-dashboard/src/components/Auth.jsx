// src/components/Auth.js
import React, { useState, useContext, createContext } from 'react';
import * as JWT from 'jwt-decode';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  let [user, setUser] = useState(null);

  let login = (token) => {
    let decodedToken = JWT(token);
    setUser(decodedToken);
    localStorage.setItem('token', token);
  };

  let logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  let value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
