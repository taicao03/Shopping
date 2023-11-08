"use server";

import endpoint from "@/app/network";
import type { AddToCart } from "@/app/types/auth";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const addToCart = async (e: FormData) => {
  const user = cookies().get("user")?.value;
  const getUser = JSON.parse(user);
  const productId = e.get("productId")?.toString();
  const quantity = e.get("quantity");
  const color = e.get("color")?.toString();
  const size = e.get("size")?.toString();

  if (!productId || !quantity) return;

  const data: AddToCart = {
    productId,
    quantity: Number(quantity),
    color,
    size,
  };

  const res = await fetch(`${endpoint.cart}/addtocart/${getUser?._id}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    revalidateTag("test");
  }
};
