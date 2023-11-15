"use server";

import endpoints from "@/app/network/index";

export const getAllProduct = async () => {
  const url = `${endpoints?.product}/getallcard`;
  const res = await fetch(url, {
    method: "GET",
    next: { revalidate: 0 },
  });

  return res.json();
};

export const getOneProduct = async () => {
  const res = await fetch(
    `${endpoints?.product}/getcard/653b60e894578f77047f60b4`,
    {
      method: "GET",
      next: { revalidate: 0 },
    }
  );

  return res.json();
};
