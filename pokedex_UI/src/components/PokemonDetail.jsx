import React, { useState, useEffect } from "react";
import fetchPokemonData from "../api/apiPokemon";
import "../assets/home.css";
import Table from "react-bootstrap/Table";

const PokemonDetail = ({ pokeIdOrName }) => {
  const [pokemon, setPokemon] = useState(null);

  const getPokemonData = async () => {
    try {
      const data = await fetchPokemonData(pokeIdOrName);
      setPokemon(data);
    } catch (error) {
      console.error("Error fetching:", error);
    }
  };

  useEffect(() => {
    getPokemonData();
  }, [pokeIdOrName]);

  return (
    <>
      <div className="page-container">
        <div className="detail">
          {pokemon ? (
            <>
              <div className="container">
                <div className="pokemon-container">
                  <h5>
                    <span className="ml-2">{`#${pokemon.id.toString()}`}</span>
                    <span className="mx-2">{pokemon.types[0].type.name.toUpperCase()}</span>
                  </h5>
                  <h2 className="fw-bold">{pokemon.name.toUpperCase()}</h2>
                  <p>Height: {pokemon.height}</p>
                  <p>Weight: {pokemon.weight}</p>
                  <p>Abilities: {pokemon.abilities[1].ability.name}</p>
                </div>
                <div className="pokemon-details1">
                  <img
                    src={pokemon.sprites.other["official-artwork"].front_shiny}
                    alt={pokemon.name}
                  />
                </div>
              </div>
              <div className="stat_table">
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>About</th>
                      <th>Score</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pokemon.stats.map((statsInfo, index) => (
                      <tr key={index}>
                        <td>{statsInfo.stat.name.toUpperCase()}</td>
                        <td className="text-center">{statsInfo.base_stat}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </>
          ) : (
            <p>No Pokémon found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
