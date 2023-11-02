import Link from "next/link";
import React from "react";

export default function MyAccount() {
  const menu = [
    {
      name: "Home",
      url: "/",
    },
  ];

  return (
    <div className="main_container">
      <div className="py-40 flex">
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
    </div>
  );
}
