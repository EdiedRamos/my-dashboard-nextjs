const getPokemons = async (limit = 20, offset = 0) => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((ans) => ans.json());
  return data;
};

const PokemonsPage = async () => {
  const pokemons = await getPokemons();

  return <div>{JSON.stringify(pokemons)}</div>;
};

export default PokemonsPage;
