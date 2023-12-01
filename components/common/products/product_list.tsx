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
  wishList,
  expireAt,
  limited,
}: ListProduct) {
  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <div className="group col-span-2 md:col-span-1">
          <div className="relative">
            <div className="left-4 absolute top-[16px]">
              {expireAt ? (
                <span className="py-2 px-3  rounded  bg-green text-white font-normal text-[12px] leading-3  me-2">
                  New
                </span>
              ) : (
                <></>
              )}
              {sale > 0 ? (
                <span className="py-2 px-3  rounded  bg-button_2 text-white font-normal text-[12px] leading-3 me-2">
                  {sale}%
                </span>
              ) : (
                <></>
              )}

              {limited ? (
                <span className="py-2 px-3  rounded color-limited text-indigo-600 font-bold uppercase text-[12px] leading-3">
                  limited
                </span>
              ) : (
                <></>
              )}
            </div>

            <img
              src={images}
              alt="product"
              className="mb-4 w-full object-cover rounded h-[220px]"
            />
            <div className="absolute hidden group-hover:block top-5 bg-white rounded-full right-2.5 cursor-pointer p-1 border">
              {wishList ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                    fill="red"
                    // stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              )}
            </div>
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
          <p className="mb-1">
            {sale > 0 ? (
              <>
                <span className="text-base text-secondary_3 font-medium me-3">
                  {priceSale}$
                </span>
                <span className="text-base text-outline font-medium line-through">
                  {price}$
                </span>
              </>
            ) : (
              <span className="text-base text-secondary_3 font-medium">
                {price}$
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
