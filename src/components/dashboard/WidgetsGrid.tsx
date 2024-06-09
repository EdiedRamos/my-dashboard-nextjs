"use client";

import { MdLocalGroceryStore } from "react-icons/md";
import React from "react";
import { SimpleWidget } from "./SimpleWidget";
import { useAppSelector } from "@/store";

export const WidgetsGrid = () => {
  const counter = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap gap-5 justify-center mt-5">
      <SimpleWidget
        title="Contador"
        subtitle="Productos en el carro"
        label={`${counter}`}
        icon={<MdLocalGroceryStore size={35} />}
        href="/dashboard/counter"
      />
    </div>
  );
};
