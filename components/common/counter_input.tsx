"use client";

import { useState } from "react";

export default function CounterInput() {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        type="button"
        className="w-10 h-11 bg-white border border-outline rounded-tl flex items-center justify-center"
        onClick={decrement}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 12H4"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <input
        type="number"
        value={count}
        className="no-spin text-black w-20 h-11 outline-none border-y border-outline text-center"
        inputMode="numeric"
        pattern="[0-9]*"
      />
      <button
        type="button"
        className="rounded-tr w-10 h-11 bg-button_2 flex items-center justify-center"
        onClick={increment}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 20V12M12 12V4M12 12H20M12 12H4"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  );
}
