"use server";

import endpoints from "@/app/network/index";
import { ProductField } from "@/app/types/product";

export const getAllProduct = async ({ query }: { query?: string }) => {
  const url = `${endpoints?.product}/getallcard${query}`;
  const res = await fetch(url, {
    method: "GET",
    next: { revalidate: 1 },
  });

  return res.json();
};

export const getOneProduct = async ({ productId }: { productId: string }) => {
  const res = await fetch(`${endpoints?.product}/getcard/${productId}`, {
    next: { revalidate: 0 },
  });

  return res.json();
};
