/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
import { ListProduct } from "@/app/types/product";
import StarRating from "@/components/common/products/star";
import Link from "next/link";
import Skeleton from "./skeleton";
export default function ProductList({
  images,
  price,
  nameCard,
  rating,
  totalReviews,
  sale,
  priceSale,
  id,
}: ListProduct) {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <div className="group">
          <div className="relative">
            {sale > 0 ? (
              <span className="py-1 px-3 absolute top-[16px] rounded left-0 bg-button_2 text-white font-normal text-[12px] leading-3">
                {sale}
              </span>
            ) : (
              <></>
            )}

            <img
              src={images}
              alt="product"
              className="mb-4 w-full object-cover rounded"
            />
            <Link href={`/product/${id}`}>
              <button
                className="bg-black text-white w-full hidden group-hover:block transition duration-700 ease-in-out py-2 absolute bottom-0 right-0 left-0 rounded-b"
                type="button"
              >
                Add to cart
              </button>
            </Link>
          </div>
          <h1 className="text-base font-medium text-black mb-2">{nameCard}</h1>
          <p className="mb-2">
            {sale > 0 ? (
              <>
                <span className="text-base text-secondary_3 font-medium me-3">
                  {priceSale}
                </span>
                <span className="text-base text-outline font-medium line-through">
                  {price}
                </span>
              </>
            ) : (
              <span className="text-base text-secondary_3 font-medium">
                {price}
              </span>
            )}
          </p>
          <div className="flex items-center">
            <StarRating rating={rating} />
            <span className="ms-2 text-[14px] font-semibold leading-5 text-outline">
              ({totalReviews})
            </span>
          </div>
        </div>
      </Suspense>
    </>
  );
}
