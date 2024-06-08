import type { Metadata } from "next";
import type { Pokemon } from "@/pokemons";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pokemon = await loadPokemon(params.id);

  if (!pokemon) {
    return {
      title: "Not found",
    };
  }

  return {
    title: `#${pokemon.id} - ${pokemon.name}`,
    description: "Information about a pokemon",
  };
}

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
