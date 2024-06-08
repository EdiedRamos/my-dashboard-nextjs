import type { Pokemon } from "@/pokemons";

interface Props {
  params: { id: string };
}

export const metadata = {
  title: "Pokemon Info",
};

async function loadPokemon(pokemonId: string): Promise<Pokemon | null> {
  const url = "https://pokeapi.co/api/v2/pokemon/" + pokemonId;
  try {
    const data = await fetch(url, { cache: "force-cache" }).then((res) =>
      res.json()
    );
    return data as Pokemon;
  } catch {
    return null;
  }
}

const PokemonPage = async (props: Props) => {
  const pokemon = await loadPokemon(props.params.id);

  return (
    <div>
      Pokemon Page {props.params.id} {pokemon?.name}{" "}
    </div>
  );
};

export default PokemonPage;
