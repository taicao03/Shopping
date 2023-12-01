"use client";
import { useState } from "react";
import { addToCart } from "@/app/actions/cart/index";
import CounterInput from "@/components/common/counter_input";
import Button from "@/components/common/button";
import Reviews from "./reviews";
import { SliderProduct } from "@/components/common/slider";
import StarRating from "@/components/common/products/star";

export default function DetailProduct({ props }: any) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const selectdColor = (cl: string) => {
    setColor(cl);
  };

  const selectdSize = (size: string) => {
    setSize(size);
  };

  const handleSubmit = async (e: FormData) => {
    e.append("productId", `${props?._id}`);
    e.append("color", `${color}`);
    e.append("size", `${size}`);

    await addToCart(e);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-x-[70px]">
        <div className="col-span-2">
          <SliderProduct />
        </div>
        <div className="col-span-1">
          <h2 className="text-black font-semibold leading-6 text-[24px] mb-4">
            {props?.nameCard}
          </h2>
          <div className="mb-4 flex items-center">
            <StarRating rating={props?.totalRating} />

            <span className="text-base ms-2 me-4 text-2 text-[14px]">
              {`(${props?.reviews.length} Reviews)`} |
            </span>
            <span>
              {props?.quantity == 0 ? (
                <p className="capitalize text-[14px] font-normal leading-5 text-red">
                  out of stock
                </p>
              ) : (
                <p className="capitalize text-[14px] font-normal leading-5 text-green">
                  In Stock
                </p>
              )}
            </span>
          </div>

          <p className="mb-6 text-base text-[24px] text-black">
            <span className="text-[20px]">$</span>
            {props?.price}
          </p>

          <p className="pb-6 text-base text-[14px] text-black border-b border-outline">
            {props?.description}
          </p>

          <form action={handleSubmit}>
            <div className="flex items-center mb-6">
              <p className="text-black me-2 text-base text-[24px]">Colours:</p>
              <div>
                {props?.properties?.color.map((i: any, index: number) => (
                  <button
                    className={`p-2.5 rounded-full me-2 ${
                      color == i?.code ? "border-2 border-blue-500" : ""
                    }`}
                    type="button"
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
                    type="button"
                    className={`w-8 h-8 text-center  rounded ${
                      size == i ? "bg-button_2" : "border border-outline"
                    }`}
                    onClick={() => selectdSize(i)}
                    key={index}
                  >
                    <span
                      className={`${size == i ? "text-white" : "text-black"}`}
                    >
                      {i}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <CounterInput name="quantity" />
              <Button type="submit" text="Buy Now" py="py-0" />
            </div>
          </form>
        </div>
      </div>
      <Reviews props={props?.reviews} productId={props?._id} />
    </>
  );
}
