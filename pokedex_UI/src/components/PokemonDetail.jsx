import React, { useState , useEffect } from 'react';
import fetchPokemonData from '../api/apiPokemon';

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
                <div>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} />
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                </div>
            ) : (
                <p>No Pokémon found.</p>
            )}
        </div>
        </>
    )
};

export default PokemonDetail;