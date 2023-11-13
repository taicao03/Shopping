"use server";

import axios from "axios";
import endpoint from "@/app/network";
import type { SignUp, Account, SignIn } from "@/app/types/auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect  } from "next/navigation";
import { cookies } from "next/headers";

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

export const signIn = async (e: FormData) => {
  const email = e.get("email")?.toString();
  const password = e.get("password")?.toString();

  if (!email || !password) return;

  const signIn: SignIn = {
    email,
    password,
  };

  const res = await fetch(`${endpoint.auth}/login`, {
    method: "POST",
    body: JSON.stringify(signIn),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (res.ok) {
    const data = await res.json();
    cookies().set("user", JSON.stringify(data?.others));
    cookies().set("token", JSON.stringify(data?.accessToken));
    revalidatePath('/' ,"page")
    redirect(`/`);
    
  }
};

export const logOut = async () => {
  const auth = cookies().get("user");

  await axios.post(`${endpoint.auth}/logout`, {});

  cookies().delete("user");
};

export const getOneUser = async () => {
  const token = cookies().get("token")?.value;
  const getToken = JSON.parse(token);

  const res = await fetch(`${endpoint.user}/one-user`, {
    headers: {
      token: `Break ${getToken}`,
    },
    next: { tags: ["account"] },
  });

  if (res.ok) {
    return res.json();
  }
};

export const account = async (e: FormData) => {
  const token = cookies().get("token")?.value;
  const getToken = JSON.parse(token);

  const userName = e.get("userName")?.toString();
  const email = e.get("email")?.toString();
  const avatar = e.get("avatar");

  if (!userName) return;

  const updateAccount: Account = {
    userName,
    email,
    avatar,
  };

  const res = await fetch(`${endpoint.user}`, {
    method: "PUT",
    body: JSON.stringify(updateAccount),
    headers: {
      "Content-Type": "multipart/form-data",
      // Accept: "application/json",
      token: `Break ${getToken}`,
    },
  });

  if (res.ok) {
    const userData = await getOneUser();
    cookies().set("user", JSON.stringify(userData));
    revalidateTag("account");
  }
};
