"use client";

import { PiSmileySadFill } from "react-icons/pi";
import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";

export const FavoriteGrid = () => {
  const favorite = useAppSelector((store) =>
    Object.values(store.pokemons.favoritePokemons)
  );

  return (
    <>
      {favorite.length === 0 ? (
        <NotFound />
      ) : (
        <PokemonGrid pokemons={favorite} />
      )}
    </>
  );
};

const NotFound = () => {
  return (
    <div className="bg-slate-100 antialiased text-black selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <main className="relative w-full flex flex-col justify-center items-center bg-[#1A2238] p-10 rounded-lg">
          <h1 className="text-9xl font-extrabold text-white tracking-widest">
            <PiSmileySadFill className="text-yellow-500" />
          </h1>
          <div className="bg-[#FF6A3D] p-2 text-sm rounded text-white rotate-12 absolute top-5">
            No tienes pokemones favoritos
          </div>
        </main>
      </div>
    </div>
  );
};
