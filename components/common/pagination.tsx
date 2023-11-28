"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Pagination({
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
}) {
  const router = useRouter();

  return (
    <>
      {totalPages > 1 ? (
        <div className={`flex gap-x-3 justify-center items-center py-5`}>
          <button
            className={`border border-outline text-black px-3 ${
              page == 1 ? "hidden" : ""
            }`}
            onClick={() => {
              router.push(`/?page=${Number(1)}`);
            }}
            type="button"
          >
            {1}
          </button>
          <button
            className={`border border-outline text-black px-3 ${
              page <= 2 ? "hidden" : ""
            }`}
            onClick={() => {
              router.push(`/?page=${Number(page) - 1}`);
            }}
            disabled={page == 1 ? true : false}
            type="button"
          >
            {page - 1}
          </button>

          <button
            className={`border border-button_2 text-button_2 px-3 pointer-events-none`}
            onClick={() => {
              router.push(`/?page=${Number(page) + 1}`);
            }}
            disabled={page == totalPages ? true : false}
            type="button"
          >
            {page}
          </button>

          <button
            className={`border border-outline text-black px-3 ${
              page == totalPages ? "hidden" : ""
            }`}
            onClick={() => {
              router.push(`/?page=${Number(page) + 1}`);
            }}
            disabled={page == totalPages ? true : false}
            type="button"
          >
            {page + 1}
          </button>

          <button
            className={`border border-outline text-black px-3 ${
              page == totalPages - 1 || totalPages ? "hidden" : ""
            }`}
            onClick={() => {
              router.push(`/?page=${Number(totalPages)}`);
            }}
            disabled={page == totalPages ? true : false}
            type="button"
          >
            {totalPages}
          </button>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
