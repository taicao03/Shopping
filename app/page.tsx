"use client";
import React from "react";
import useAuth from "./context/auth";

export default function Home() {
  const { user } = useAuth() as { user: any };

  return (
    <div className="main_container">
      <div className="text-black">{user?.userName}</div>
      <div className="">addasds</div>
    </div>
  );
}
