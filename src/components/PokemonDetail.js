// PokemonDetail.js
import React from 'react';

const PokemonDetail = ({ pokemon, selectedPokemon }) => {
  if (!pokemon) {
    return <div>Loading Pokémon details...</div>;
  }

  return (
    <div>
      <h2>{selectedPokemon}</h2>
      <img src={pokemon.sprites.front_default} alt={selectedPokemon} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      <p>Base Experience: {pokemon.base_experience}</p>
      <p>Abilities: {pokemon.abilities.map((ability) => ability.ability.name).join(', ')}</p>
      <p>Types: {pokemon.types.map((type) => type.type.name).join(', ')}</p>
    </div>
  );
};

export default PokemonDetail;
