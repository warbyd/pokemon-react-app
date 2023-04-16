// PokemonList.js
import React from 'react';
import PokemonItem from './PokemonItem';

const PokemonList = ({ pokemons, onPokemonClick, onToggleFavorite, onRemoveFromFavorites, favoritePokemons }) => {
  const handleToggleFavorite = (pokemonName) => {
    onToggleFavorite(pokemonName);
  };

  const handleRemoveFromFavorites = (pokemonName) => {
    onRemoveFromFavorites(pokemonName);
  };

  const handlePokemonClick = (pokemonName) => {
    onPokemonClick(pokemonName);
  };

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <PokemonItem
          key={pokemon.name}
          pokemon={pokemon}
          onPokemonClick={handlePokemonClick}
          onToggleFavorite={handleToggleFavorite}
          onRemoveFromFavorites={handleRemoveFromFavorites}
          isFavorite={favoritePokemons.some((favPokemon) => favPokemon.name === pokemon.name)}
        />
      ))}
    </ul>
  );
};

export default PokemonList;
