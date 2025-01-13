import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../assets/home.css"
import React, { useState , useEffect } from 'react';
import { fetchPokemonData } from '../api/apiPokemon';

const PokemonSearch = ({pokeIdOrName}) => {
    const [pokemon, setPokemon] = useState(null);
    const getPokemonData = async () => {
        try {
            const data = await fetchPokemonData(pokeIdOrName);
            setPokemon(data);
            
        } catch (error) {
            console.error("Error fetching:", error);
        }

    }
    useEffect(() => {
        getPokemonData()

     }, [pokeIdOrName]);

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">PokeDex</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <div id="navbarScroll" className='d-flex align-items-center'>
          <input
              type="text"
              className="input-search me-2"
              placeholder="Enter Id or Name"
            />
            <Button variant="outline-success">Search</Button>
        </div>
      </Container>

    </Navbar> 
    <div>
        <h1>Pokémon Fetcher</h1>
        <PokemonSearch pokeIdOrName="pikachu" /> 
      </div>
    </>
  );
}

export default PokemonSearch;
