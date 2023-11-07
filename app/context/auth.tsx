// AuthProvider.js
"use client";

import React, { createContext, useContext, useState } from "react";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { getOneUser } from "../actions/auth";

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

  const logOut = () => {
    deleteCookie("user");
    deleteCookie("token");
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
