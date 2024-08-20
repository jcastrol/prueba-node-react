import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    token: localStorage.getItem("token") || null,
    refreshToken: localStorage.getItem("refreshToken") || null,
    role: localStorage.getItem("role") || null,
    email: localStorage.getItem("email") || null,
  });

  const setAuthData = ({
    token,
    refreshToken,
    role = "USER",
    email = "mail@mail.com",
  }) => {
    
    setAuthState({
      ...authState,
      token,
      refreshToken,
      role: role || authState.role,
      email: email || authState.email,
    });
  };

  const clearAuthData = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    setAuthState({
      token: null,
      refreshToken: null,
      role: null,
      email: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, setAuthData, clearAuthData }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
