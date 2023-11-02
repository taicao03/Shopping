// AuthProvider.js
"use client";

import React, { createContext, useContext, useState } from "react";
import axios from "axios";
import endpoint from "@/app/network";
const AuthContext = createContext({});

export default function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const storedUserData = localStorage.getItem("userData");
  const userData = JSON?.parse(storedUserData || null);
  const [user, setUser] = useState(userData || null);

  const login = async (bodyData: any) => {
    try {
      const response = await axios.post(`${endpoint.auth}/login`, bodyData);
      const accessToken = response.data.accessToken;

      localStorage.setItem("token", accessToken);
      localStorage.setItem("userData", JSON.stringify(response?.data?.others));
    } catch (error) {
      console.error("Đăng nhập thất bại", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
