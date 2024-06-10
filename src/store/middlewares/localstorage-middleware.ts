import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware: Middleware =
  (state) => (next) => (action) => {
    next(action);
    // @ts-expect-error
    if (action.type === "pokemons/favoritePokemonToggle") {
      try {
        const currentState = state.getState() as RootState;
        localStorage.setItem(
          "favorite-pokemons",
          JSON.stringify(currentState.pokemons.favoritePokemons)
        );
      } catch {}
    }
  };
