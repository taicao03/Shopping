"use client";

import Button from "@/components/common/button";
import Link from "next/link";

export default function NotFound() {
  const menu = [
    {
      name: "Home",
      url: "/",
    },
  ];
  return (
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
          <p className="text-black text-nav_content me-2">404 Error</p>
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-black font-medium leading-[115px] text-[110px] mb-10">
          404 Not Found
        </h1>
        <p className="text-black text-base mb-20">
          Your visited page not found. You may go home page.
        </p>
        <Button
          href="/"
          type="button"
          className="mb-[140px]"
          text="Back to home page"
        />
      </div>
    </div>
  );
}
