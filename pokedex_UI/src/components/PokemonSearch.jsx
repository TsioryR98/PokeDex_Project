import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../assets/home.css";
import React, { useState, useEffect} from "react";
import fetchPokemonList from "../api/apiPokemonSearch";

const PokemonSearch = () => {
  const [searchPokemon, setsearchPokemon] = useState("");
  const [pokemonList , setPokemonList] = useState([]);
  
  const getPokemonList = async () => {
    try {
      const data = await fetchPokemonList()
      console.log(data);
      setPokemonList(data)
    } catch (error) {
      console.error("Error fetching:", error);
    }
  }
  useEffect(() => {
    getPokemonList();
  }, []);

  const handleSearchPokemon = (e) => {
    setsearchPokemon(e.target.value); 
  };
  

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">PokeDex</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <div id="navbarScroll" className="d-flex align-items-center">
            <input
              type="text"
              value={searchPokemon}
              onChange={handleSearchPokemon}
              className="input-search me-2"
              placeholder="Enter Id or Name"
            />
            <Button variant="outline-success" className="me-2">
              Search
            </Button>
            <Button variant="outline-warning">Random</Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
};
export default PokemonSearch;
