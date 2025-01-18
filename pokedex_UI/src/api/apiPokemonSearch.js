import { instancePoke } from "./api";

const fetchPokemonList = async () => {
  try {
    const response = await instancePoke.get(`/pokemon`);
    const data = response.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchPokemonList;
