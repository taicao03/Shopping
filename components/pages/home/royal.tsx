"use client";
import React, { useEffect, useState } from "react";
import endpoints from "@/app/network/index";
import ProductList from "@/components/common/products/product_list";
import { useSearchParams } from "next/navigation";
import Skeleton from "@/components/common/products/skeleton";

import Pagination from "@/components/common/pagination";
export default function Royal() {
  const searchParam = useSearchParams();
  const search = searchParam.get("page");
  const [data, setData] = useState<any>(null);
  const page = data?.page;
  const totalPages = data?.totalPages;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const url = `${endpoints?.product}/getallcard?page=${
        search || 1
      }&pageSize=8`;
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);

  return (
    <div>
      <Skeleton loading={loading}>
        {page > totalPages ? (
          <></>
        ) : (
          <>
            <div className="grid grid-cols-4 gap-[30px]">
              {data?.data?.map((item?: any, index?: number) => (
                <ProductList
                  id={item?._id}
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
            <Pagination page={page} totalPages={totalPages} />
          </>
        )}
      </Skeleton>
    </div>
  );
}
