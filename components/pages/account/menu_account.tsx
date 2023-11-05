"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuAccount() {
  const path = usePathname();

  const listMenu = [
    {
      name: "My Profile",
      url: "/account/my-account",
    },
    {
      name: "My Address",
      url: "/",
    },
    {
      name: "My Order",
      url: "/account/my-order",
    },
  ];

  return (
    <>
      <div>
        {listMenu?.map((i, index) => (
          <div key={index} className=" mb-2">
            <Link
              href={i?.url}
              className={`text-base ${
                path == i?.url ? "text-button_2 pointer-events-none" : "text-2"
              }`}
            >
              {i?.name}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
