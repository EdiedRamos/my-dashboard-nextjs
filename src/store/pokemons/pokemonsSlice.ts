import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import type { SimplePokemon } from "@/pokemons";

export interface FavoritePokemons {
  [key: string]: SimplePokemon;
}

interface PokemonsState {
  favoritePokemons: FavoritePokemons;
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
    setFavoritePokemons(state, action: PayloadAction<FavoritePokemons>) {
      state.favoritePokemons = action.payload;
    },
  },
});

export const { favoritePokemonToggle, setFavoritePokemons } =
  pokemonsSlice.actions;

export default pokemonsSlice.reducer;
