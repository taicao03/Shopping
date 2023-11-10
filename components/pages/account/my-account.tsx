"use client";

import Link from "next/link";
import MenuAccount from "./menu_account";
import Input from "@/components/common/input";
import Button from "@/components/common/button";

import { account } from "@/app/actions/auth";
import { useState } from "react";
import axios from "axios";

export default function UiMyAccount(user: any) {
  const [avatar, setAvatar] = useState();

  const onInputChange = (e) => {
    setAvatar(e.target.files[0]);
  };
  const menu = [
    {
      name: "Home",
      url: "/",
    },
  ];

  const handleSubmit = async (e: FormData) => {
    e.append("avatar", avatar);

    await account(e);
  };

  const submit = async (e) => {
    // e.preventDefault();

    const fromData = new FormData();
    fromData.append("avatar", avatar);
    fromData.append("userName", "aaedd");

    const result = await axios.put(`http://localhost:8080/v1/user`, fromData, {
      headers: {
        "Content-Type": "multipart/form-data",
        token: `Break eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NDIyNDc4OGViNTViY2RhOTVhNTI5NCIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjk5NjA4ODAyLCJleHAiOjE3MjU1Mjg4MDJ9.T-UuBVqLrfqgNKNTbvsjGyEI9WCZjyk1uyMyB7tUn-M`,
      },
    });
  };

  return (
    <>
      <div className="main_container">
        <div className="py-40 flex justify-between">
          <div className="flex">
            {menu.map((item, index) => (
              <Link
                key={index}
                href={item?.url}
                className="text-2 text-nav_content me-2"
              >
                {item?.name}
              </Link>
            ))}
            <p className="text-black text-nav_content me-2">My account</p>
          </div>
          <p className="text-nav_content text-black">
            Welcome!{" "}
            <img
              className="h-20 w-20"
              src={`http://localhost:8080/uploads/${user?.user?.avatar}`}
              alt=""
            />
            <span className="text-button_2">{user?.user?.userName}</span>
          </p>
        </div>

        <div className="grid grid-cols-3 mb-[140px]">
          <div className="col-span-1">
            <MenuAccount />
          </div>
          <div className="col-span-2">
            <h2></h2>

            <form onSubmit={submit}>
              <input
                type="file"
                accept="image/png, image/jpeg"
                onChange={onInputChange}
              />

              <div className="flex justify-end col-span-2">
                <p>Cancel</p>
                <Button type="submit" text="Save Changes" />
              </div>
            </form>
            <form action={handleSubmit}>
              <div className="grid grid-cols-2 gap-x-[50px]">
                <Input
                  defaultValue={user?.user?.userName}
                  parentClass="col-span-1"
                  name="userName"
                  label="Name"
                />
                <Input
                  defaultValue={user?.user?.phone}
                  parentClass="col-span-1"
                  name="phone"
                  label="Phone"
                />
                <Input
                  disabled={true}
                  defaultValue={user?.user?.email}
                  parentClass="col-span-1"
                  name="email"
                  label="Email"
                />

                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={onInputChange}
                />

                <div className="flex justify-end col-span-2">
                  <p>Cancel</p>
                  <Button type="submit" text="Save Changes" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
