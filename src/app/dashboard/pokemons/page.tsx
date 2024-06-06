import type { PokemonsResponse, SimplePokemon } from "@/app/pokemons";

import Image from "next/image";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((ans) => ans.json());
  const pokemons: SimplePokemon[] = data.results.map(({ name, url }) => ({
    id: url.split("/").at(-2) ?? "",
    name,
  }));
  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(50);

  return (
    <div className="flex flex-wrap justify-center gap-5 items-center p-3">
      {pokemons.map((pokemon) => (
        <div className="shadow-md w-[200px] flex flex-col gap-3 items-center rounded-xl bg-slate-800 p-5">
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={70}
            height={70}
            alt="Pokemon logo"
          />
          <p className="text-white font-medium">{pokemon.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PokemonsPage;
