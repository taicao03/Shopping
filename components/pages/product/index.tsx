"use client";
import { useState } from "react";
import { addToCart } from "@/app/actions/cart/index";
import CounterInput from "@/components/common/counter_input";
import Button from "@/components/common/button";
import { revalidateTag } from "next/cache";
export default function DetailProduct({ props }: any) {
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const selectdColor = (cl: string) => {
    setColor(cl);
  };

  const selectdSize = (size: string) => {
    setSize(size);
  };

  function StarRating({ rating }) {
    const stars = [];

    // Tạo biểu tượng nửa sao (hoặc biểu tượng bạn chọn) nếu có 1/2 điểm
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
              fill="#FFAD33"
            />
          </svg>
        );
      } else if (hasHalfStar && i === Math.ceil(rating)) {
        stars.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.99984 1.83335C9.75073 1.83151 9.50622 1.90038 9.29469 2.03196C9.08316 2.16354 8.9133 2.35242 8.80484 2.57668L6.95317 6.33002L2.80984 6.93168C2.56339 6.96719 2.33181 7.071 2.14133 7.23135C1.95084 7.3917 1.80907 7.60218 1.73205 7.83896C1.65503 8.07573 1.64585 8.32935 1.70555 8.57107C1.76525 8.8128 1.89144 9.03298 2.06984 9.20668L5.06984 12.1283L4.3615 16.255C4.31937 16.5001 4.34664 16.7522 4.44023 16.9826C4.53382 17.213 4.69 17.4127 4.89111 17.559C5.09223 17.7054 5.33027 17.7925 5.57833 17.8107C5.82639 17.8288 6.07457 17.7772 6.29484 17.6617L9.99984 15.7133V1.83335Z"
              fill="#FFAD33"
            />
            <path
              opacity="0.25"
              d="M10 1.83595C10.2491 1.83404 10.5001 2.00001 10.5001 2.00001C10.5001 2.00001 11.0866 2.20807 11.195 2.44195L13.0467 6.35634L17.1901 6.98383C17.4366 7.02086 17.6682 7.12912 17.8587 7.29635C18.0492 7.46358 18.1909 7.68309 18.268 7.93003C18.345 8.17697 18.3542 8.44147 18.2945 8.69357C18.2347 8.94567 18.1086 9.1753 17.9302 9.35645L14.9301 12.4035L15.6384 16.7072C15.6806 16.9629 15.6533 17.2257 15.5597 17.466C15.4661 17.7064 15.3099 17.9146 15.1088 18.0672C14.9077 18.2198 14.6697 18.3107 14.4216 18.3296C14.1735 18.3486 13.9253 18.2947 13.7051 18.1743L10 16.1423V1.83595Z"
              fill="black"
            />
          </svg>
        );
      } else {
        stars.push(
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
          >
            <path
              opacity="0.25"
              d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z"
              fill="black"
            />
          </svg>
        );
      }
    }

    return <div className="flex items-center">{stars}</div>;
  }

  const handleSubmit = async (e: FormData) => {
    e.append("productId", `${props?._id}`);
    e.append("color", `${color}`);
    e.append("size", `${size}`);

    await addToCart(e);
  };

  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">dsfds</div>
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
  );
}
