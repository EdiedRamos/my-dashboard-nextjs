"use client";

import React from "react";
import { useState } from "react";

interface Props {
  initialCartCounter?: number;
}

export const CartCounter = ({ initialCartCounter = 0 }: Props) => {
  const [counter, setCounter] = useState<number>(initialCartCounter);

  const handleIncrement = () => setCounter((prev) => prev + 1);
  const handleDecrement = () => setCounter((prev) => prev - 1);

  return (
    <div className="flex flex-col items-center gap-5">
      <span className="text-slate-800 font-bold text-5xl bg-gray-200 p-3 rounded-full">
        {counter}
      </span>
      <div className="flex gap-3">
        <button
          onClick={handleDecrement}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px]"
        >
          -1
        </button>
        <button
          onClick={handleIncrement}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px]"
        >
          +1
        </button>
      </div>
    </div>
  );
};
