import type { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";

interface PokemonsState {
  favoritePokemons: {
    [key: string]: SimplePokemon;
  };
}

const initialState: PokemonsState = {
  favoritePokemons: {},
};

const pokemonsSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export const {} = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
