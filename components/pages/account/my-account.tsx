"use client";

import Link from "next/link";
import useAuth from "@/app/context/auth";

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
      </div>
    </>
  );
}
