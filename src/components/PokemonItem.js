import React from 'react';

const PokemonItem = ({ pokemon, onPokemonClick, onToggleFavorite, isFavorite }) => {
  const handlePokemonClick = () => {
    onPokemonClick(pokemon.name);
  };

  const handleToggleFavorite = () => {
    // Call the onToggleFavorite callback function with the pokemon name
    onToggleFavorite(pokemon.name);
  };

  return (
    <li onClick={handlePokemonClick}>
      {pokemon.name}
      <button onClick={handleToggleFavorite}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </li>
  );
};

export default PokemonItem;

