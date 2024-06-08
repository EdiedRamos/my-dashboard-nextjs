import Image from "next/image";
import { PokemonCard } from "./PokemonCard";
import { SimplePokemon } from "../interfaces/simple-pokemon";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 items-center p-3">
      {pokemons.map((pokemon) => (
        // <div className="shadow-md w-[200px] flex flex-col gap-3 items-center rounded-xl bg-slate-800 p-5">
        //   <Image
        //     src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        //     width={70}
        //     height={70}
        //     alt="Pokemon logo"
        //   />
        //   <p className="text-white font-medium">{pokemon.name}</p>
        // </div>
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
