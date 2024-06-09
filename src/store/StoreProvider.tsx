"use client";

import { Provider } from "react-redux";
import React from "react";
import { store } from ".";

interface Props {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};
