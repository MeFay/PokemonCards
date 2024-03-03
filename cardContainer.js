import Card from "/card.js";

document.addEventListener("DOMContentLoaded", function () {
  fetch("pokemons.json")
    .then((response) => response.json())
    .then((data) => {
      const dropdown = document.createElement("div");
      dropdown.className = "dropdown";
      dropdown.innerHTML = data.pokemons[0].name;

      const dropdownContent = document.createElement("div");
      dropdownContent.className = "dropdown-content";

      data.pokemons.forEach((pokemon) => {
        const option = document.createElement("div");
        option.className = "option";
        option.innerHTML = pokemon.name;
        option.addEventListener("click", function () {
          dropdown.innerHTML = this.innerHTML;
          const selectedPokemon = data.pokemons.find(
            (pokemon) => pokemon.name === this.innerHTML
          );

          const cardsContainer = document.getElementById("my-cards");
          cardsContainer.innerHTML = "";
          Card(selectedPokemon);
        });
        dropdownContent.appendChild(option);
      });

      dropdown.appendChild(dropdownContent);
      document.body.insertBefore(dropdown, document.getElementById("my-cards")); // faz ficar no topo
      Card(data.pokemons[0]);
    });

    dropdownContent.addEventListener("click", function () {
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
    });
});
