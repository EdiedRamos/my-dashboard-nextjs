import type { PokemonsResponse, SimplePokemon } from "@/pokemons";

import { PokemonGrid } from "@/pokemons";

export const metadata = {
  title: "Pokemons page",
};

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

  // throw new Error("Generated Error");

  return pokemons;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons(50);

  return (
    <div>
      <h2 className="text-center text-2xl p-2 mb-3 bg-slate-800 text-white">
        POKEMONS
      </h2>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
};

export default PokemonsPage;
