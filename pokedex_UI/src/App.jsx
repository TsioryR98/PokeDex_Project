import 'bootstrap/dist/css/bootstrap.min.css';
import PokemonSearch from './components/PokemonSearch'
import PokemonDetail from './components/PokemonDetail';

const App = () => {

  return (
    <>
      <PokemonSearch/>

      <div>
            <PokemonDetail pokeIdOrName="pikachu" />
        </div>

    </>
  )
}

export default App
