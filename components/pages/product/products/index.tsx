"use client";

import endpoints from "@/app/network";
import Pagination from "@/components/common/pagination";
import ProductList from "@/components/common/products/product_list";
import Skeleton from "@/components/common/products/skeleton";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductAll() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<any>(null);
  const [pages, setPages] = useState(1);
  const [pageSize, setPageSize] = useState(16);
  const page = data?.page;
  let totalResults = data?.totalResults;
  const totalPages = data?.totalPages;
  const searchParam = useSearchParams();

  const keyword = searchParam.get("keyword");
  const paramSales = searchParam.get("sales");
  const paramKeyCategory = searchParam.get("keyCategory");

  const [sales, setSales] = useState(Number(paramSales) || 0);
  const [expireAt, setExpireAt] = useState(false);
  const [limited, setLimited] = useState(false);
  const [key, keyCategory] = useState(false);

  console.log(data);

  const handleToggleSalesClick = () => {
    setSales((e) => (e === 0 ? 1 : 0));
  };

  const handleToggleExpireAtClick = () => {
    setExpireAt((e) => (e === false ? true : false));
  };

  const handleToggleLimitedAtClick = () => {
    setLimited((e) => (e === false ? true : false));
  };

  useEffect(() => {
    const fetchData = async () => {
      const url = `${
        endpoints?.product
      }/getallcard?page=${pages}&pageSize=${pageSize}&keyword=${keyword}&sales=${sales}&expireAt=${
        expireAt === true ? true : ""
      }&limited=${limited === true ? true : ""}`;

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
  }, [pages, pageSize, keyword, sales, expireAt, limited]);

  return (
    <div>
      <div className="grid grid-cols-4 gap-x-4">
        <div className="col-span-1">
          <p className="text-black">Price</p>
          <ul className="ms-5 text-base">
            <li>High to low</li>
            <li>Low to high</li>
          </ul>
          <ul>
            <p
              onClick={handleToggleSalesClick}
              className={`${
                sales > 0 ? "text-green font-semibold" : "text-black"
              } cursor-pointer`}
            >
              Sales
            </p>
            <li></li>
          </ul>
          <ul>
            <p
              onClick={handleToggleExpireAtClick}
              className={`${
                expireAt === true ? "text-green font-semibold" : "text-black"
              } cursor-pointer text-base`}
            >
              Product New
            </p>
            <li></li>
          </ul>
          <ul>
            <p
              onClick={handleToggleLimitedAtClick}
              className={`${
                limited === true ? "text-green font-semibold" : "text-black"
              } cursor-pointer text-base`}
            >
              Limited
            </p>
          </ul>
        </div>
        <div className="col-span-3">
          <Skeleton loading={loading} quantity={pageSize}>
            <div className="grid grid-cols-4 gap-[30px]">
              {data?.data?.map((item?: any, index?: number) => (
                <ProductList
                  id={item?._id}
                  key={index}
                  expireAt={item?.expireAt}
                  price={item?.price}
                  nameCard={item?.nameCard}
                  images={item?.mainPhoto}
                  rating={item?.totalRating}
                  totalReviews={item?.reviews.length}
                  sale={item?.sales}
                  priceSale={item?.priceSales}
                  limited={item?.limited}
                />
              ))}
            </div>
          </Skeleton>
          <div className="">
            {totalResults == 0 && (
              <p className="text-base text-black">
                <span className="text-[26px] text-black font-semibold me-2">
                  '{keyword}'
                </span>
                No results matched
              </p>
            )}
          </div>

          {pageSize === 8 ? (
            <Pagination
              page={page}
              totalPages={totalPages}
              setPages={setPages}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
