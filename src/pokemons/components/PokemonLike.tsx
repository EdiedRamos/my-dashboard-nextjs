"use client";

import { useAppDispatch, useAppSelector } from "@/store";

import { FaHeart } from "react-icons/fa6";
import type { SimplePokemon } from "../interfaces";
import { favoritePokemonToggle } from "@/store/pokemons/pokemonsSlice";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonLike = ({ pokemon }: Props) => {
  const dispatch = useAppDispatch();
  const favoritePokemons = useAppSelector(
    (store) => store.pokemons.favoritePokemons
  );

  const handleLike = () => dispatch(favoritePokemonToggle(pokemon));

  return (
    <div className="">
      <button
        className="w-full py-2 hover:bg-gray-100 flex justify-center items-center"
        onClick={handleLike}
      >
        <div className="text-gray-300">
          <FaHeart
            className={`${favoritePokemons[pokemon.id] ? "text-red-500" : ""}`}
          />
        </div>
        <div className="pl-3">
          <p className="text-sm font-medium text-gray-800 leading-none">
            Agregar a favoritos
          </p>
          <p className="text-xs text-gray-500">Esperando a ser agregado 😟</p>
        </div>
      </button>
    </div>
  );
};
