"use client";

import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";

export const FavoriteGrid = () => {
  const favorite = useAppSelector((store) =>
    Object.values(store.pokemons.favoritePokemons)
  );

  return <PokemonGrid pokemons={favorite} />;
};
