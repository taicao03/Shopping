"use server";

import axios from "axios";
import endpoint from "@/app/network";
import type { SignUp, Account, SignIn } from "@/app/types/auth";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
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

  await axios
    .post(`${endpoint.auth}/login`, signIn)
    .then(function (response) {
      cookies().set("user", JSON.stringify(response?.data?.others));
      cookies().set("token", JSON.stringify(response?.data?.accessToken));
      redirect(`/`);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export const logOut = async () => {
  const auth = cookies().get("user");

  await axios.post(`${endpoint.auth}/logout`, {});

  cookies().delete("user");
};

export const account = async (e: FormData) => {
  const user = cookies().get("user")?.value;
  const token = cookies().get("token")?.value;

  const getUser = JSON.parse(user);
  const getToken = JSON.parse(token);

  const userName = e.get("userName")?.toString();
  const email = e.get("email")?.toString();
  const avatar = e.get("avatar");
  
  if (!email || !userName || !avatar) return;

  const updateAccount: Account = {
    userName,
    email,
    avatar,
  };


 try {
   
  await axios.put(`${endpoint.user}`, updateAccount, {
    headers: {
      token: `Break ${getToken}`,
    },
  });
  const getOneUser = await axios.get(`${endpoint.user}/${getUser?._id}`, {
    headers: {
      token: `Break ${getToken}`,
    },
  });
   cookies().set("user", JSON.stringify(getOneUser?.data));
   revalidateTag("/account/my-account");
   revalidatePath('/account/my-account')
  } catch (e) {
    return { message: 'Failed to create' }
  }
   redirect("/account/my-account")

};
