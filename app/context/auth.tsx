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
  const token = getCookie("token");
  const getToken = token ? JSON.parse(token) : null;

  const [user, setUser] = useState(() => {});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${endpoint.user}/one-user`, {
        headers: {
          token: `Break ${getToken}`,
        },
      });
      const result = await response.json();
      setUser(result);
    };

    fetchData();
  }, []);

  const logOut = () => {
    deleteCookie("user");
    deleteCookie("token");
    setUser();
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, logOut, token }}>
      {children}
    </AuthContext.Provider>
  );
};
