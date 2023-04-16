// PokemonListContainer.js
import React, { useState, useEffect } from 'react';
import PokemonList from '../components/PokemonList';
import PokemonDetail from '../components/PokemonDetail';

const PokemonListContainer = () => {
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [favoritePokemons, setFavoritePokemons] = useState([]);
  const [pokemonDetails, setPokemonDetails] = useState(null); // Added state for pokemonDetails

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, []);

  const handlePokemonClick = (pokemonName) => {
    setSelectedPokemon(pokemonName);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data));
  };

  const handleToggleFavorite = (pokemonName) => {
    const isFavorite = favoritePokemons.some((pokemon) => pokemon.name === pokemonName);
    if (isFavorite) {
      setFavoritePokemons(favoritePokemons.filter((pokemon) => pokemon.name !== pokemonName));
    } else {
      const pokemonToAdd = pokemons.find((pokemon) => pokemon.name === pokemonName);
      if (pokemonToAdd) {
        setFavoritePokemons([...favoritePokemons, pokemonToAdd]);
      }
    }
  };

  const handleRemoveFromFavorites = (pokemonName) => {
    setFavoritePokemons(favoritePokemons.filter((pokemon) => pokemon.name !== pokemonName));
  };

  return (
    <div>
      <h1>Pokémon List</h1>
      <PokemonList
        pokemons={pokemons}
        onPokemonClick={handlePokemonClick}
        onToggleFavorite={handleToggleFavorite}
        onRemoveFromFavorites={handleRemoveFromFavorites}
        favoritePokemons={favoritePokemons}
      />
      {selectedPokemon && (
        <PokemonDetail
          pokemon={pokemonDetails}
          selectedPokemon={selectedPokemon}
        />
      )}
      <h2>Favorite Pokémon</h2>
      <ul>
        {favoritePokemons.map((pokemon) => (
          <li key={pokemon.name}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PokemonListContainer;
