"use client";
import React, { useEffect, useState } from "react";
import endpoints from "@/app/network/index";
import ProductList from "@/components/common/products/product_list";
import { useSearchParams } from "next/navigation";
import Skeleton from "@/components/common/products/skeleton";
import Heading from "@/components/common/heading";
import Button from "@/components/common/button";
import Pagination from "@/components/common/pagination";

const quantityProduct = 4;

export default function Sales() {
  const searchParam = useSearchParams();
  const search = searchParam.get("page");
  const [data, setData] = useState<any>(null);
  const [pageSize, setPageSize] = useState(4);
  const page = data?.page;
  const totalPages = data?.totalPages;
  const [loading, setLoading] = useState(true);
  const [whisList, setWishList] = useState(false);
  const togglePageSize = () => {
    setPageSize((prevSize) => (prevSize === 4 ? 8 : 4));
  };
  useEffect(() => {
    const fetchData = async () => {
      const url = `${
        endpoints?.product
      }/getallcard?page=${1}&pageSize=${pageSize}&sales=${Number(1)} `;

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
  }, [pageSize]);

  return (
    <div className="my-10">
      <Heading
        title="Today’s"
        heading="Flash Sales"
        link="/product?sales=1&keyword="
        textLink="View All"
      />
      <Skeleton loading={loading} quantity={pageSize}>
        {page > totalPages ? (
          <></>
        ) : (
          <>
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
                  wishList={whisList}
                  limited={item?.limited}
                />
              ))}
            </div>
            {pageSize === 8 ? (
              <Pagination page={page} totalPages={totalPages} />
            ) : (
              <></>
            )}
          </>
        )}
      </Skeleton>

      {data?.totalResults > quantityProduct ? (
        <Button
          parentClass="flex items-center justify-center"
          text={pageSize == 4 ? "View All" : "Show less"}
          onClick={togglePageSize}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
