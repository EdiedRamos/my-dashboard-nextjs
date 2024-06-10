"use client";

import React, { useEffect } from "react";

import { Provider } from "react-redux";
import { setFavoritePokemons } from "./pokemons/pokemonsSlice";
import { store } from ".";

interface Props {
  children: React.ReactNode;
}
export const StoreProvider = ({ children }: Props) => {
  useEffect(() => {
    const favoritePokemonsLS =
      localStorage.getItem("favorite-pokemons") ?? "{}";
    try {
      const favoritePokemons = JSON.parse(favoritePokemonsLS);
      store.dispatch(setFavoritePokemons(favoritePokemons));
    } catch {}
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
