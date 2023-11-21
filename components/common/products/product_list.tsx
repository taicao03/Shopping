/* eslint-disable @next/next/no-img-element */
import React from "react";
import { ListProduct } from "@/app/types/product";
import StarRating from "@/components/common/products/star";

export default function ProductList({
  images,
  price,
  nameCard,
  rating,
}: ListProduct) {
  return (
    <>
      <div className="">
        <img src={images} alt="dads" className="mb-4" />
        <h1 className="text-base font-medium text-black mb-2">{nameCard}</h1>
        <p className="mb-2">
          <span className="text-base text-secondary_3 font-medium">
            {price}
          </span>
          <span className="text-base text-black font-medium"></span>
        </p>
        <StarRating rating={rating} />
      </div>
    </>
  );
}
