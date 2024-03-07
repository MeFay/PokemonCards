// We're getting our Pokémon cards from a box named "/card.js"
import Card from "/card.js";

// We have a special book named "pokemons.json" that has all the names of our Pokémon
const getPokemon = () =>
  fetch("pokemons.json") // We open the book
    .then((response) => response.json()) // We read the book
    .then((data) => {
      return data.pokemons; // We get all the Pokémon names from the book
    });

// When we're ready to play the game
document.addEventListener("DOMContentLoaded", async function () {
  // We get all the Pokémon names
  getPokemon().then(async (pokemonList) => {
    // When we choose a Pokémon card
    const handleOptionClick = (pokemon) => {
      dropdownDisplay.innerHTML = pokemon.name; // We show the Pokémon name on our game screen
      const container = document.getElementById("my-cards"); // We have a special place to keep our chosen Pokémon card
      container.removeChild(container.firstChild); // We remove the previous Pokémon card from our special place
      Card(pokemon); // We put our new chosen Pokémon card in our special place
    };

    // When we click on our game screen
    const handleDisplayClick = () => {
      // If our Pokémon names are hidden
      if (dropdownContent.classList[0] === "dropdown-content--hide") {
        dropdownContent.classList.replace(
          "dropdown-content--hide",
          "dropdown-content--show"
        ); // We show all the Pokémon names
        return;
      }
      // If our Pokémon names are shown
      dropdownContent.classList.replace(
        "dropdown-content--show",
        "dropdown-content--hide"
      ); // We hide all the Pokémon names
    };

    // We create our game screen
    const dropdownDisplay = document.createElement("div");
    dropdownDisplay.classList.add("dropdown"); // Our game screen is called "dropdown"
    dropdownDisplay.innerHTML = pokemonList[0].name; // We show the first Pokémon name on our game screen
    dropdownDisplay.addEventListener("click", handleDisplayClick); // When we click on our game screen, we can either show or hide all the Pokémon names
    document.body.append(dropdownDisplay); // We put our game screen on our table
    
    // We create a place to keep all our Pokémon names
    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content--hide"); // At first, we hide all our Pokémon names
    dropdownDisplay.appendChild(dropdownContent);
    // We put our Pokémon names on our table

    // We choose our first Pokémon card
    Card(pokemonList[0]); // We put our first Pokémon card in our special place

    // For each Pokémon name
    pokemonList.forEach((pokemon) => {
      const option = document.createElement("div"); // We create a Pokémon card
      option.innerHTML = pokemon.name; // We write the Pokémon name on the card
      option.addEventListener("click", () => handleOptionClick(pokemon)); // When we choose a Pokémon card, we show the Pokémon name on our game screen and put the Pokémon card in our special place
      dropdownContent.append(option); // We put our Pokémon card with the other Pokémon cards
    });
  });
});