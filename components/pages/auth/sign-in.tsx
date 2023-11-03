"use client";

import React, { useState } from "react";
// import useAuth from "@/app/context/auth";
import Link from "next/link";
import Content from "./index";
import Button from "@/components/common/button";
import { signIn } from "@/app/actions/auth";
export default function SignIn() {
  return (
    <div className="main_container">
      <div className="grid grid-cols-3 items-center gap-[129px] mb-[140px] mt-[60px]">
        <div className="xl:col-span-2 col-span-3">
          <Content />
        </div>
        <div className="xl:col-span-1 col-span-3">
          <h2 className="mb-[24px] text-black text-[36px] font-medium leading-8">
            Log in to Exclusiv
          </h2>
          <p className="text-base mb-[48px] text-black">
            Enter your details below
          </p>
          <form action={signIn}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="outline-none border-b border-b-1 w-full placeholder:text-2 placeholder:text-base text-black text-base mb-10"
            />
            <input
              type="text"
              name="password"
              placeholder="Password"
              className="outline-none border-b border-b-1 w-full placeholder:text-2 placeholder:text-base text-black text-base mb-10"
            />
            <div className="flex justify-between items-center">
              <Button type="submit" text="Log In" />
              <Link className="text-button_2 text-base" href={``}>
                Forget Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
