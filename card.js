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
    ELECTRIC: "card-eletric",
    FLYING: "card-flying",
    POISON: "card-poison",
    PSYCHIC: "card-psychic",
  };

  const nameMap = {
    Pikachu: "Pikachu",
    Charizard: "Charizard",
    Blastoise: "Blastoise",
    Flareon: "Flareon",
    Bulbasaur: "Bulbasaur",
    Gengar: "Gengar",
    Alakazam: "Alakazam",
  };

  const cardsContainer = document.getElementById("my-cards");

  const card = document.createElement("div");
  card.className = `card ${typesMap[type]}`;

  const cardImage = document.createElement("img");
  cardImage.src = image;
  card.appendChild(cardImage);

  const cardStats = document.createElement("div");
  card.appendChild(cardStats);

  const cardtype = document.createElement("p");
  cardtype.innerHTML = type;
  cardStats.appendChild(cardtype);

  const cardName = document.createElement("h2");
  cardName.innerHTML = name;
  cardStats.appendChild(cardName);

  ////////////////////////////////HP////////////////////////////////
  const cardhp = document.createElement("p");
  cardhp.innerHTML = `HP:`;
  cardStats.appendChild(cardhp);

  const hpValue = document.createElement("span");
  hpValue.innerHTML = hp;
  cardhp.appendChild(hpValue);

  ////////////////////////////////ATTACK////////////////////////////////
  const cardAttacks = document.createElement("p");
  cardAttacks.innerHTML = `Attack: `;
  cardStats.appendChild(cardAttacks);

  const cardAttacksValue = document.createElement("span");
  cardAttacksValue.innerHTML = attacks;
  cardAttacks.appendChild(cardAttacksValue);

  ////////////////////////////////DEFENSE////////////////////////////////
  const cardDefense = document.createElement("p");
  cardDefense.innerHTML = `Defense: `;
  cardStats.appendChild(cardDefense);

  const cardDefenseValue = document.createElement("span");
  cardDefenseValue.innerHTML = defense;
  cardDefense.appendChild(cardDefenseValue);

  ////////////////////////////////SPECIAL ATTACK////////////////////////////////
  const cardspecialAttack = document.createElement("p");
  cardspecialAttack.innerHTML = `Special Attack: `;
  cardStats.appendChild(cardspecialAttack);

  const cardspecialAttackValue = document.createElement("span");
  cardspecialAttackValue.innerHTML = specialAttack;
  cardspecialAttack.appendChild(cardspecialAttackValue);

  ////////////////////////////////SPECIAL DEFENSE ////////////////////////////////
  const cardspecialDefense = document.createElement("p");
  cardspecialDefense.innerHTML = `Special Defense: `;
  cardStats.appendChild(cardspecialDefense);

  const cardspecialDefenseValue = document.createElement("span");
  cardspecialDefenseValue.innerHTML = specialDefense;
  cardspecialDefense.appendChild(cardspecialDefenseValue);

  ////////////////////////////////SPEED ////////////////////////////////
  const cardspeed = document.createElement("p");
  cardspeed.innerHTML = `Speed: `;
  cardStats.appendChild(cardspeed);

  const cardspeedValue = document.createElement("span");
  cardspeedValue.innerHTML = speed;
  cardspeed.appendChild(cardspeedValue);

  ////////////////////////////////HEIGHT ////////////////////////////////
  const cardheight = document.createElement("p");
  cardheight.innerHTML = `Height: `;
  cardStats.appendChild(cardheight);

  const cardheightValue = document.createElement("span");
  cardheightValue.innerHTML = height;
  cardheight.appendChild(cardheightValue);

  ////////////////////////////////WEIGHT ////////////////////////////////
  const cardweight = document.createElement("p");
  cardweight.innerHTML = `Weight: `;
  cardStats.appendChild(cardweight);

  const cardweightValue = document.createElement("span");
  cardweightValue.innerHTML = weight;
  cardweight.appendChild(cardweightValue);

  ////////////////////////////////ABILITY SECTION////////////////////////////////
  const cardAbilityContainer = document.createElement("div");
  cardStats.appendChild(cardAbilityContainer);

    ////////////////////////////////NORMAL ABILITY SECTION////////////////////////////////
  const cardAbilityDiv = document.createElement("div");
  cardAbilityContainer.appendChild(cardAbilityDiv);

  const cardAbility = document.createElement("p");
  cardAbility.innerHTML = `Ability: `;
  cardAbilityDiv.appendChild(cardAbility);

  const cardAbilityValue = document.createElement("span");
  cardAbilityValue.innerHTML = ability;
  cardAbility.appendChild(cardAbilityValue);


  ////////////////////////////////HIDDEN ABILITY SECTION////////////////////////////////
  const cardHiddenAbilityDiv = document.createElement("div");
  cardAbilityContainer.appendChild(cardHiddenAbilityDiv);
  
  const cardHiddenAbility = document.createElement("p");
  cardHiddenAbility.innerHTML = `Hidden Ability: `;
  cardHiddenAbilityDiv.appendChild(cardHiddenAbility);

  const cardHiddenAbilityValue = document.createElement("span");
  cardHiddenAbilityValue.innerHTML = ability;
  cardHiddenAbility.appendChild(cardHiddenAbilityValue);

  
  cardsContainer.appendChild(card);
};

export default Card;
