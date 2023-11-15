"use client";

import { useState } from "react";
import Link from "next/link";
import endpoint from "@/app/network";
import MenuAccount from "./menu_account";
import Input from "@/components/common/input";
import Button from "@/components/common/button";
import { useRouter } from "next/navigation";
import axios from "axios";
import useAuth from "@/app/context/auth";

export default function UiMyAccount(user: any) {
  const [avatar, setAvatar] = useState();
  const [userName, setUserName] = useState("");
  const { token } = useAuth() as { token: any };

  const router = useRouter();

  const onInputChange = (e?: any) => {
    setAvatar(e.target.files[0]);
  };
  const menu = [
    {
      name: "Home",
      url: "/",
    },
  ];

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const fromData = new FormData();

    fromData.append("avatar", avatar as any);
    fromData.append("userName", userName as string);

    const result = await axios
      .put(`${endpoint.user}`, fromData, {
        headers: {
          "Content-Type": "multipart/form-data",
          token: `Break ${token}`,
        },
      })
      .then((response) => {
        router.refresh();
      })
      .catch((error) => {
        console.log(error);
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
            Welcome!
            <img
              className="h-20 w-20"
              src={`${process.env.NEXT_PUBLIC_IMG_URL}/${user?.user?.avatar}`}
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
              <div className="grid-cols-2 grid gap-x-6">
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  onChange={onInputChange}
                />
                <Input
                  defaultValue={user?.user?.userName}
                  parentClass="col-span-1"
                  onChange={(e: any) => setUserName(e.target.value)}
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
              </div>

              <div className="flex justify-end col-span-2">
                <p>Cancel</p>
                <Button type="submit" text="Save Changes" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
