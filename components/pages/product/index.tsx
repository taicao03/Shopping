"use client";
import { useState, useEffect } from "react";
import CounterInput from "@/components/common/counter_input";
import Button from "@/components/common/button";
export default function DetailProduct({ props }: any) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const selectdColor = (cl: string) => {
    setColor(cl);
  };

  const selectdSize = (size: string) => {
    setSize(size);
  };

  function StarRating({ rating }) {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      // Dựa vào rating, xác định xem liệu sao nên hiển thị filled (đã được xếp hạng) hay outlined (chưa xếp hạng)
      const starType = i <= rating ? "filled" : "outlined";

      stars.push(
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill={starType === "filled" ? "yellow" : "none"}
            stroke="black"
            strokeWidth="1"
            d="M8 0l2.23 5.717h5.77l-4.677 3.618 1.767 5.49L8 12.206l-4.104 2.62 1.767-5.49-4.677-3.618H5.77z"
          />
        </svg>
      );
    }

    return <div>{stars}</div>;
  }
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">dsfds</div>
      <div className="col-span-1">
        <h2 className="text-black font-semibold leading-6 text-[24px] mb-4">
          {props?.nameCard}
        </h2>
        <p className="mb-4">
          <StarRating rating={0} />
        </p>

        <p className="mb-6 text-base text-[24px] text-black">
          <span className="text-[20px]">$</span>
          {props?.price}
        </p>

        <p className="pb-6 text-base text-[14px] text-black border-b border-outline">
          {props?.description}
        </p>

        <div className="flex items-center mb-6">
          <p className="text-black me-2 text-base text-[24px]">Colours:</p>
          <div>
            {props?.properties?.color.map((i: any, index: number) => (
              <button
                className={`p-2.5 rounded-full me-2 ${
                  color == i?.code ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => selectdColor(i?.code)}
                key={index}
                style={{ background: `#${i?.code}` }}
              ></button>
            ))}
          </div>
        </div>

        <div className="flex items-center mb-6">
          <p className="text-black me-2 text-base text-[24px]">Size:</p>
          <div className="flex gap-2 flex-wrap">
            {props?.properties?.size.map((i: any, index: number) => (
              <button
                className={`w-8 h-8 text-center  rounded ${
                  size == i ? "bg-button_2" : "border border-outline"
                }`}
                onClick={() => selectdSize(i)}
                key={index}
              >
                <span className={`${size == i ? "text-white" : "text-black"}`}>
                  {i}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          <CounterInput />
          <Button type="submit" text="Buy Now" className="py-0" />
        </div>
      </div>
    </div>
  );
}
