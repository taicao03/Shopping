"use client";
import endpoints from "@/app/network";
import Heading from "@/components/common/heading";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Categories() {
  const [data, setData] = useState<any>(null);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const url = `${endpoints?.product}/category`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="my-10">
        <Heading title="Categories" heading="Browse By Category" />
      </div>

      <div className="flex gap-[30px]">
        {data?.data?.map((item, index) => (
          <div className="border border-outline py-5 px-2 rounded cursor-pointer">
            <Link href={`/product?keyCategory=${item?.key}`}>
              {item?.nameCategory}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
