// AuthProvider.js
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import endpoint from "@/app/network";

const AuthContext = createContext({});
export default function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const router = useRouter();

  const [user, setUser] = useState(() => {
    const cookie = getCookie("user");
    return cookie ? JSON.parse(cookie) : null;
  });
  const [token] = useState(() => {
    const token = getCookie("token");
    return token ? JSON.parse(token) : null;
  });

  const logOut = () => {
    deleteCookie("user");
    deleteCookie("token");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, logOut, token }}>
      {children}
    </AuthContext.Provider>
  );
};
