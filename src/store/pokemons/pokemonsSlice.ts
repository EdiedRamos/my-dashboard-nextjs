import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { SimplePokemon } from "@/pokemons";

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
  reducers: {
    favoritePokemonToggle(state, action: PayloadAction<SimplePokemon>) {
      const incomingPokemon = action.payload;
      const localPokemon = state.favoritePokemons[incomingPokemon.id];
      if (!localPokemon) {
        state.favoritePokemons[incomingPokemon.id] = incomingPokemon;
      } else {
        delete state.favoritePokemons[incomingPokemon.id];
      }
    },
  },
});

export const { favoritePokemonToggle } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
