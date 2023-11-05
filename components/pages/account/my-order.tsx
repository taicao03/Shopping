"use client";

import Link from "next/link";
import useAuth from "@/app/context/auth";
import MenuAccount from "./menu_account";

export default function UiMyAccount({ result }: any) {
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
            {result?.hisory?.map((item: any) => (
              <>
                {item?.items.map((i: any, index: any) => (
                  <div className="mb-5" key={index}>
                    <p className="text-black">{i?.productName}</p>
                    <p className="text-black">{i?.quantity}</p>
                    <p className="text-black">{i?.price}</p>
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
