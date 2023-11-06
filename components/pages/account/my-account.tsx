"use client";

import Link from "next/link";
import useAuth from "@/app/context/auth";
import MenuAccount from "./menu_account";
import Input from "@/components/common/input";
import Button from "@/components/common/button";

import { account } from "@/app/actions/auth";

export default function UiMyAccount() {
  const { user } = useAuth() as { user: any };
  const menu = [
    {
      name: "Home",
      url: "/",
    },
  ];

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
                {item?.name} /
              </Link>
            ))}
            <p className="text-black text-nav_content me-2">My account</p>
          </div>
          <p className="text-nav_content text-black">
            Welcome! <span className="text-button_2">{user?.userName}</span>
          </p>
        </div>

        <div className="grid grid-cols-3 mb-[140px]">
          <div className="col-span-1">
            <MenuAccount />
          </div>
          <div className="col-span-2">
            <h2></h2>
            <form action={account}>
              <div className="grid grid-cols-2 gap-x-[50px]">
                <Input
                  defaultValue={user?.userName}
                  parentClass="col-span-1"
                  name="userName"
                  label="Name"
                />
                <Input
                  defaultValue={user?.phone}
                  parentClass="col-span-1"
                  name="phone"
                  label="Phone"
                />
                <Input
                  defaultValue={user?.email}
                  parentClass="col-span-1"
                  name="email"
                  label="Email"
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
