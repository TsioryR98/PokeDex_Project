import { instancePoke } from "./api";

//export data from API/V2
const fetchPokemonData = async (pokeIdOrName) => {
  try {
    const response = await instancePoke.get(`/pokemon/${pokeIdOrName}`);
    return response.data;
    
  } catch (error) {
    console.error(error);
    throw error;
  }
};
export default fetchPokemonData;
