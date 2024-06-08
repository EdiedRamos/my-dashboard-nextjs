import { PokemonCard } from "./PokemonCard";
import { SimplePokemon } from "../interfaces/simple-pokemon";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap justify-center gap-5 items-center p-3">
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};
