import "bootstrap/dist/css/bootstrap.min.css";
import PokemonSearch from "./components/PokemonSearch";
import PokemonDetail from "./components/PokemonDetail"
import React, { useState} from "react";

const App = () => {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  return (
    <>
    <div>
      <PokemonSearch setSelectedPokemon={setSelectedPokemon} />
      {selectedPokemon && <PokemonDetail pokeIdOrName={selectedPokemon.trim().toString().toLowerCase()} />}
    </div>
    </>
  );
};

export default App;
