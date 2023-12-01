import React from "react";
import Button from "./button";
import Link from "next/link";

export default function Heading({
  heading,
  title,
  link,
  textLink,
}: {
  heading?: string;
  title?: string;
  link?: string;
  textLink?: string;
}) {
  return (
    <div className="mb-[60px]">
      <div className="flex mb-5 items-center">
        <div className="h-10 w-5 bg-button_2 rounded-md"></div>
        <p className="ms-4 text-[16px] text-button_2 leading-5 font-semibold">
          {title}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-[36px] leading-[48px] font-semibold">{heading}</h2>
        {link ? (
          <Link href={link}>
            <Button text={textLink} type="button" py="py-2" />
          </Link>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
