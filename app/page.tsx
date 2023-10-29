"use client";
import React, { useEffect } from "react";
import useAuth from "./context/auth";

export default function Home() {
  let data = { userName: "admin2", password: "123456789" };
  const { user, login } = useAuth() as { user: any; login: ({}) => void };

  const handleLogin = () => {
    login(data);
  };

  return (
    <div className="main_container">
      <button onClick={handleLogin} className="text-black">
        Login
      </button>
      <div className="text-black">{user?.userName}</div>
      <div className="">addasds</div>
    </div>
  );
}
