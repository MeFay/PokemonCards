import Card from "/card.js";
document.addEventListener("DOMContentLoaded", function () {
  fetch("pokemons.json")
    .then((response) => response.json())
    .then((data) => renderPokemonCards(data.pokemons));
});

function renderPokemonCards(pokemons) {
  pokemons.forEach((pokemon) => {
    Card(
      pokemon.name,
      pokemon.type,
      pokemon.hp,
      pokemon.attacks,
      pokemon.defense,
      pokemon.specialAttack,
      pokemon.specialDefense,
      pokemon.speed,
      pokemon.height,
      pokemon.weight,
      pokemon.ability,
      pokemon.hiddenAbility
    );
  });
}
