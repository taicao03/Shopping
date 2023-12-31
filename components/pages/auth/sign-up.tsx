"use client";
import React, { useRef } from "react";

import Content from "./index";
import Button from "@/components/common/button";
import Input from "@/components/common/input";

import { signUp } from "@/app/actions/auth";
import Link from "next/link";
export default function SignUp() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormData) => {
    const res = await signUp(e);

    if (res?.success) {
      formRef?.current?.reset();
    }
  };
  return (
    <div className="main_container">
      <div className="grid grid-cols-3 items-center gap-[129px] mb-[140px] mt-[60px]">
        <div className="xl:col-span-2 col-span-3">
          <Content />
        </div>
        <div className="xl:col-span-1 col-span-3">
          <h2 className="mb-[24px] text-black text-[36px] font-medium leading-8">
            Create an account
          </h2>
          <p className="text-base mb-[48px] text-black">
            Enter your details below
          </p>
          <form ref={formRef} action={handleSubmit}>
            <input
              type="text"
              name="userName"
              placeholder="Name"
              className="outline-none border-b border-b-1 w-full placeholder:text-2 placeholder:text-base text-black text-base mb-10"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="outline-none border-b border-b-1 w-full placeholder:text-2 placeholder:text-base text-black text-base mb-10"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="outline-none border-b border-b-1 w-full placeholder:text-2 placeholder:text-base text-black text-base mb-10"
            />
            <div className="flex justify-between items-center">
              <Button type="submit" text="Create Account" className="w-full" />
            </div>
            <p className="mt-8 text-2 text-base">
              Already have account?
              <Link className="text-black ms-2" href={"/auth/sign-in"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
