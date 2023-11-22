"use client";
import React from "react";
import ProductList from "@/components/common/products/product_list";
export default function Royal({ props }: { props?: any }) {
  return (
    <div>
      <div className="grid grid-cols-4 gap-[30px]">
        {props?.data?.map((item?: any, index?: number) => (
          <ProductList
            key={index}
            price={item?.price}
            nameCard={item?.nameCard}
            images={item?.mainPhoto}
            rating={item?.totalRating}
            totalReviews={item?.reviews.length}
            sale={item?.sales}
            priceSale={item?.priceSales}
          />
        ))}
      </div>
    </div>
  );
}
