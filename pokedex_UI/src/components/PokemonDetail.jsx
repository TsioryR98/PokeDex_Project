import React, { useState , useEffect } from 'react';
import fetchPokemonData from '../api/apiPokemon';
import "../assets/home.css"


const PokemonDetail = ({pokeIdOrName}) => {
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
        <div>
            {pokemon ? (
                <>
                <div className='container'>
                    <div className='pokemon-container'>
                        <h6>{pokemon.types[0].type.name.toUpperCase()}</h6>
                        <h2 className='fw-bold'>{pokemon.name.toUpperCase()}</h2>
                        <p>Height: {pokemon.height}</p>
                        <p>Weight: {pokemon.weight}</p>
                        <p>Abilities: {pokemon.abilities[1].ability.name}</p>
                    </div>
                <div className='pokemon-details1'>
                    <img src={pokemon.sprites.other['official-artwork'].front_shiny} alt={pokemon.name} />
                </div>
                </div>
                </>
            ) : (
                <p>No Pokémon found.</p>
            )}
        </div>
        </>
    )
};

export default PokemonDetail;