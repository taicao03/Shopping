"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Pagination({
  setPages,
  page,
  totalPages,
}: {
  page: number;
  totalPages: number;
  setPages?: any;
}) {
  return (
    <div className="py-10 flex justify-center gap-x-2">
      {page > 1 && (
        <button
          onClick={() => setPages((prevPages: number) => prevPages - 1)}
          className="text-black border border-outline px-2.5"
        >
          {Number(page) - 1}
        </button>
      )}

      <button className="border border-button_2 px-2.5 text-button_2 pointer-events-none">
        {page}
      </button>

      {totalPages > page && (
        <button
          onClick={() => setPages((prevPages: number) => prevPages + 1)}
          className="text-black border border-outline px-2.5"
        >
          {Number(page) + 1}
        </button>
      )}
    </div>
  );
}
