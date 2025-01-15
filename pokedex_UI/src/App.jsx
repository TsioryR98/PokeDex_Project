import "bootstrap/dist/css/bootstrap.min.css";
import PokemonSearch from "./components/PokemonSearch";
import PokemonDetail from "./components/PokemonDetail";

const App = () => {
  return (
    <>
      <PokemonSearch />
      <div>
        <PokemonDetail pokeIdOrName="45" />
      </div>
    </>
  );
};

export default App;
