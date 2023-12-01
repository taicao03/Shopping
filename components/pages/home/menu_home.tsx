"use client";
import React from "react";
import { SliderHomeMenu } from "@/components/common/slider";

export default function MenuHome() {
  return (
    <div className="grid grid-cols-4 gap-x-[45px] my-10">
      <div className="border-r border-r-outline">
        <ul>
          <li className="text-base text-black mb-4">Woman’s Fashion </li>
          <li className="text-base text-black mb-4">Woman’s Fashion </li>
          <li className="text-base text-black mb-4">Woman’s Fashion </li>
          <li className="text-base text-black mb-4">Woman’s Fashion </li>
          <li className="text-base text-black mb-4">Woman’s Fashion </li>
          <li className="text-base text-black mb-4">Woman’s Fashion </li>
        </ul>
      </div>
      <div className="col-span-3">
        <SliderHomeMenu />
      </div>
    </div>
  );
}
