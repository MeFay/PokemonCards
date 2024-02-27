const Card = (
  image,
  type,
  name,
  hp,
  attacks,
  defense,
  specialAttack,
  specialDefense,
  speed,
  height,
  weight,
  ability,
  hiddenAbility
) => {
  const typesMap = {
    FIRE: "card-fire",
    WATER: "card-water",
    GRASS: "card-grass",
    ELECTRIC: "card-eletric",
    FLYING: "card-flying",
    POISON: "card-poison",
    PSYCHIC: "card-psychic"
  };

  const cardsContainer = document.getElementById("my-cards");

  const card = document.createElement("div");
  card.className = `card ${typesMap[type]}`;

  

  const cardImage = document.createElement("img");
  cardImage.src = image;
  card.appendChild(cardImage);

  const cardtype = document.createElement("p");
  cardtype.innerHTML = type;
  card.appendChild(cardtype);

  const cardName = document.createElement("h2");
  cardName.innerHTML = name;

  const cardhp = document.createElement("p");
  cardhp.innerHTML = `HP:`;
  card.appendChild(cardhp);

  const valueSpan = document.createElement("span");
  valueSpan.innerHTML = hp;

  cardhp.appendChild(valueSpan);

  const cardattacks = document.createElement("p");
  cardattacks.innerHTML = attacks;
  card.appendChild(cardattacks);

  const carddefense = document.createElement("p");
  carddefense.innerHTML = defense;
  card.appendChild(carddefense);

  const cardspecialAttack = document.createElement("p");
  cardspecialAttack.innerHTML = specialAttack;
  card.appendChild(cardspecialAttack);

  const cardspecialDefense = document.createElement("p");
  cardspecialDefense.innerHTML = specialDefense;
  card.appendChild(cardspecialDefense);

  const cardspeed = document.createElement("p");
  cardspeed.innerHTML = speed;
  card.appendChild(cardspeed);

  const cardheight = document.createElement("p");
  cardheight.innerHTML = height;
  card.appendChild(cardheight);

  const cardweight = document.createElement("p");
  cardweight.innerHTML = weight;
  card.appendChild(cardweight);

  const cardability = document.createElement("p");
  cardability.innerHTML = ability;
  card.appendChild(cardability);

  const cardhiddenAbility = document.createElement("p");
  cardhiddenAbility.innerHTML = hiddenAbility;
  card.appendChild(cardhiddenAbility);

  cardsContainer.appendChild(card);
};

export default Card;
