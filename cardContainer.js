import Card from "/card.js";

const getPokemon = () =>
  fetch("pokemons.json")
    .then((response) => response.json())
    .then((data) => {
      return data.pokemons;
    });

document.addEventListener("DOMContentLoaded", async function () {
  getPokemon().then(async (pokemonList) => {
    const handleOptionClick = (pokemon) => {
      const selected = document.getElementsByClassName("dropdown-selected")[0];

      selected.innerHTML = pokemon.name;
      const container = document.getElementById("my-cards");
      container.removeChild(container.firstChild);
      Card(pokemon);
    };

    const handleDisplayClick = () => {
      if (
        dropdownContent.classList.contains("dropdown-content--hide") === true
      ) {
        dropdownContent.classList.replace(
          "dropdown-content--hide",
          "dropdown-content--show"
        );
        return;
      }

      dropdownContent.classList.replace(
        "dropdown-content--show",
        "dropdown-content--hide"
      );
    };

    const dropdownDisplay = document.createElement("div");
    dropdownDisplay.classList.add("dropdown");
    dropdownDisplay.addEventListener("click", handleDisplayClick);

    const dropdownSelectedOption = document.createElement("div");
    dropdownSelectedOption.innerHTML = pokemonList[0].name;
    dropdownSelectedOption.classList.add("dropdown-selected");

    const dropdownContent = document.createElement("div");
    dropdownContent.classList.add("dropdown-content--hide");

    Card(pokemonList[0]);

    pokemonList.forEach((pokemon) => {
      const option = document.createElement("div");
      option.innerHTML = pokemon.name;
      option.addEventListener("click", () => handleOptionClick(pokemon));
      dropdownContent.append(option);
    });

    dropdownDisplay.appendChild(dropdownSelectedOption);
    dropdownDisplay.appendChild(dropdownContent);

    document.body.append(dropdownDisplay);
  });
});
