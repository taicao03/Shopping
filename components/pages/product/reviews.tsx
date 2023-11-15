/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Textarea from "@/components/common/textarea";
import useAuth from "@/app/context/auth";
import { useRouter } from "next/navigation";
import endpoint from "@/app/network";
import axios from "axios";
import Button from "@/components/common/button";
import { Reviews } from "@/app/types/product";

export default function Reviews({
  props,
  productId,
}: {
  props?: any;
  productId?: string;
}) {
  const [coment, setComent] = useState("");
  const { token } = useAuth() as { token: any };
  const router = useRouter();
  const [rating, setRating] = useState(0);

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const fromData = new FormData();
    fromData.append("productId", `${productId}`);
    fromData.append("rating", rating as any);
    fromData.append("comment", `${coment}`);

    const result = await axios
      .post(`${endpoint.product}/product/reviews`, fromData, {
        headers: {
          // "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
          token: `Break ${token}`,
        },
      })
      .then((response) => {
        router.refresh();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleStarClick = (index?: any) => {
    let newRating;

    newRating = index + 1;
    setRating(newRating);
  };

  return (
    <>
      <div className="">
        <form onSubmit={submit}>
          <div className={"bg-black flex"}>
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                onClick={() => handleStarClick(index)}
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill={index < rating * 1 ? "gold" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <p>Điểm số: {rating}</p>
          </div>
          <Textarea rows={5} onChange={(e: any) => setComent(e.target.value)} />
          <Button
            type="submit"
            text="Xác nhận"
            className="w-[20%]"
            parentClass="flex items-center justify-center"
          />
        </form>
        <div>
          {props?.map((item?: Reviews, index?: number) => (
            <div className="mb-5" key={index}>
              <div className="flex gap-x-2 items-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_IMG_URL}/${item?.user?.avatar}`}
                  alt="Avatar"
                  className="w-[52px] h-[52px] object-cover rounded-full border border-outline"
                />
                <div className="text-black">
                  <h2 className="text-[24px] font-semibold">
                    {item?.user?.userName}
                  </h2>
                  <p className="text-black text-base">{item?.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
