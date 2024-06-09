"use client";

import React, { useEffect } from "react";
import {
  decrementByOne,
  incrementByOne,
  resetCounter,
} from "@/store/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/store";

interface Props {
  initialCartCounter?: number;
}

export const CartCounter = ({ initialCartCounter = 0 }: Props) => {
  const count = useAppSelector((store) => store.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(resetCounter(initialCartCounter));
  }, []);

  return (
    <div className="flex flex-col items-center gap-5">
      <span className="text-slate-800 font-bold text-5xl bg-gray-200 p-3 rounded-full">
        {count}
      </span>
      <div className="flex gap-3">
        <button
          onClick={() => dispatch(decrementByOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px]"
        >
          -1
        </button>
        <button
          onClick={() => dispatch(incrementByOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-700 transition-all w-[100px]"
        >
          +1
        </button>
      </div>
    </div>
  );
};
