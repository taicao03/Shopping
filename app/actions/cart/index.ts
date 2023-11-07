"use server";

import endpoint from "@/app/network";
import type { AddToCart } from "@/app/types/auth";
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

  return res.json();
};

export const getCart = async () => {
  const user = cookies().get("user")?.value;
  const getUser = JSON.parse(user);
  console.log(getUser);

  const res = await fetch(`${endpoint.cart}/cart/${getUser?._id}`);

  if (res.ok) {
    return res.json();
  }
};
