"use server";

import endpoint from "@/app/network";
import type { SignIn, SignUp } from "@/app/types/auth";
// import { revalidateTag } from "next/cache";
import axios from "axios";

export const login = async (e: FormData) => {
  const email = e.get("email")?.toString();
  const password = e.get("password")?.toString();

  if (!email || !password) return;

  const login: SignIn = {
    email,
    password,
  };

  const res = await axios.post(`${endpoint.auth}/login`, login);
};

export const signUp = async (e: FormData) => {
  const userName = e.get("userName")?.toString();
  const email = e.get("email")?.toString();
  const password = e.get("password")?.toString();

  if (!email || !password || !userName) return;

  const signUp: SignUp = {
    userName,
    email,
    password,
  };

  const res = await fetch(`${endpoint.auth}/register`, {
    method: "POST",
    body: JSON.stringify(signUp),
    headers: { "Content-Type": "application/json" },
  });

  return res.json();
};
