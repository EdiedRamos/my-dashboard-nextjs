import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SimplePokemon } from "../interfaces";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="text-center p-6 bg-gray-800 border-b">
          <div className="flex justify-center">
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={70}
              height={70}
              alt="Pokemon logo"
            />
          </div>
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">
            {pokemon.name}
          </p>
          <div className="mt-5">
            <Link
              href={`/dashboard/pokemon/${pokemon.id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <div className="">
          <button className="w-full py-2 hover:bg-gray-100 flex justify-center items-center">
            <div className="text-gray-300">
              <FaHeart />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                Agregar a favoritos
              </p>
              <p className="text-xs text-gray-500">
                Esperando a ser agregado 😟
              </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
