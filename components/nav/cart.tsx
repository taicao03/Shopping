"use client";

import { useEffect, useState } from "react";
import endpoint from "@/app/network";

export default function Cart({ userId }: { userId?: string }) {
  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const apiUrl = `${endpoint.cart}/cart/${userId}`;

    fetch(apiUrl, {
      next: { tags: ["test"] },
    })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return <></>;
}
