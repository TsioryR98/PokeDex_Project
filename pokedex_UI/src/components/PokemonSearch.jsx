import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "../assets/home.css";
import React, { useState} from "react";

const PokemonSearch = () => {
  const [searchPokemon, setsearchPokemon] = useState("");
  const handleSearchPokemon = (e) => setsearchPokemon(e.target.value);
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
