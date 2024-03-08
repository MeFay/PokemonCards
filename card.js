const Card = ({
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
  hiddenAbility,
}) => {
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
  cardStats.className = "card-stats";
  card.appendChild(cardStats);

  const cardtype = document.createElement("p");
  cardtype.className = "card-type";
  cardtype.innerHTML = type;
  cardStats.appendChild(cardtype);

  const cardName = document.createElement("h2");
  cardName.className = "card-name";
  cardName.innerHTML = name;
  cardStats.appendChild(cardName);

  ////////////////////////////////HP////////////////////////////////
  const cardhp = document.createElement("div");
  cardhp.className = "stat-container";

  const hpLabel = document.createElement("p");
  hpLabel.className = "stat-label";
  hpLabel.innerHTML = `HP: `;
  cardhp.appendChild(hpLabel);

  const hpValue = document.createElement("p");
  hpValue.className = "stat-value";
  hpValue.innerHTML = hp;
  cardhp.appendChild(hpValue);

  cardStats.appendChild(cardhp);
  ///////////////////////////////ATTACK////////////////////////////////
  const cardAttacks = document.createElement("div");
  cardAttacks.className = "stat-container";

  const cardAttacksLabel = document.createElement("p");
  cardAttacksLabel.className = "stat-label";
  cardAttacksLabel.innerHTML = `ATTACK: `;
  cardAttacks.appendChild(cardAttacksLabel);

  const cardAttacksValue = document.createElement("p");
  cardAttacksValue.className = "stat-value";
  cardAttacksValue.innerHTML = attacks;
  cardAttacks.appendChild(cardAttacksValue);

  cardStats.appendChild(cardAttacks);

  ///////////////////////////////DEFENSE////////////////////////////////
  const cardDefense = document.createElement("div");
  cardDefense.className = "stat-container";

  const cardDefenseLabel = document.createElement("p");
  cardDefenseLabel.className = "stat-label";
  cardDefenseLabel.innerHTML = `DEFENSE: `;
  cardDefense.appendChild(cardDefenseLabel);

  const cardDefenseValue = document.createElement("p");
  cardDefenseValue.className = "stat-value";
  cardDefenseValue.innerHTML = defense;
  cardDefense.appendChild(cardDefenseValue);

  cardStats.appendChild(cardDefense);

  ///////////////////////////////SPECIAL ATTACK////////////////////////////////
  const cardspecialAttack = document.createElement("div");
  cardspecialAttack.className = "stat-container";

  const cardspecialAttackLabel = document.createElement("p");
  cardspecialAttackLabel.className = "stat-label";
  cardspecialAttackLabel.innerHTML = `SPECIAL ATTACK: `;
  cardspecialAttack.appendChild(cardspecialAttackLabel);

  const cardspecialAttackValue = document.createElement("p");
  cardspecialAttackValue.className = "stat-value";
  cardspecialAttackValue.innerHTML = specialAttack;
  cardspecialAttack.appendChild(cardspecialAttackValue);

  cardStats.appendChild(cardspecialAttack);

  ///////////////////////////////SPECIAL DEFENSE ////////////////////////////////
  const cardspecialDefense = document.createElement("div");
  cardspecialDefense.className = "stat-container";

  const cardspecialDefenseLabel = document.createElement("p");
  cardspecialDefenseLabel.className = "stat-label";
  cardspecialDefenseLabel.innerHTML = `SPECIAL DEFENSE: `;
  cardspecialDefense.appendChild(cardspecialDefenseLabel);

  const cardspecialDefenseValue = document.createElement("p");
  cardspecialDefenseValue.className = "stat-value";
  cardspecialDefenseValue.innerHTML = specialDefense;
  cardspecialDefense.appendChild(cardspecialDefenseValue);

  cardStats.appendChild(cardspecialDefense);

  ///////////////////////////////SPEED ////////////////////////////////
  const cardspeed = document.createElement("div");
  cardspeed.className = "stat-container";

  const cardspeedLabel = document.createElement("p");
  cardspeedLabel.className = "stat-label";
  cardspeedLabel.innerHTML = `SPEED: `;
  cardspeed.appendChild(cardspeedLabel);

  const cardspeedValue = document.createElement("p");
  cardspeedValue.className = "stat-value";
  cardspeedValue.innerHTML = speed;
  cardspeed.appendChild(cardspeedValue);

  cardStats.appendChild(cardspeed);

  ///////////////////////////////HEIGHT ////////////////////////////////
  const cardheight = document.createElement("div");
  cardheight.className = "stat-container";

  const cardheightLabel = document.createElement("p");
  cardheightLabel.className = "stat-label";
  cardheightLabel.innerHTML = `HEIGHT: `;
  cardheight.appendChild(cardheightLabel);

  const cardheightValue = document.createElement("p");
  cardheightValue.className = "stat-value";
  cardheightValue.innerHTML = height;
  cardheight.appendChild(cardheightValue);

  cardStats.appendChild(cardheight);

  ///////////////////////////////WEIGHT ////////////////////////////////
  const cardweight = document.createElement("div");
  cardweight.className = "stat-container";

  const cardweightLabel = document.createElement("p");
  cardweightLabel.className = "stat-label";
  cardweightLabel.innerHTML = `WEIGHT: `;
  cardweight.appendChild(cardweightLabel);

  const cardweightValue = document.createElement("p");
  cardweightValue.className = "stat-value";
  cardweightValue.innerHTML = weight;
  cardweight.appendChild(cardweightValue);

  cardStats.appendChild(cardweight);

  ///////////////////////////////ABILITY SECTION////////////////////////////////
  const cardAbilityContainer = document.createElement("div");
  cardAbilityContainer.className = "stat-container";

  const abilitiesDiv = document.createElement("div");
  abilitiesDiv.className = "ABILITIES";
  cardAbilityContainer.appendChild(abilitiesDiv);

  //////////////////////////////NORMAL ABILITY SECTION////////////////////////////////
  const cardAbilityDiv = document.createElement("div");

  const cardAbility = document.createElement("p");
  cardAbility.className = "stat-label";
  cardAbility.innerHTML = `ABILITY: `;
  cardAbilityDiv.appendChild(cardAbility);

  const cardAbilityValue = document.createElement("p");
  cardAbilityValue.className = "stat-value";
  cardAbilityValue.innerHTML = ability;
  cardAbilityDiv.appendChild(cardAbilityValue);

  abilitiesDiv.appendChild(cardAbilityDiv);

  //////////////////////////////HIDDEN ABILITY SECTION////////////////////////////////
  const cardHiddenAbilityDiv = document.createElement("div");

  const cardHiddenAbility = document.createElement("p");
  cardHiddenAbility.className = "stat-label";
  cardHiddenAbility.innerHTML = `HIDDEN ABILITY: `;
  cardHiddenAbilityDiv.appendChild(cardHiddenAbility);

  const cardHiddenAbilityValue = document.createElement("p");
  cardHiddenAbilityValue.className = "stat-value";
  cardHiddenAbilityValue.innerHTML = hiddenAbility;
  cardHiddenAbilityDiv.appendChild(cardHiddenAbilityValue);

  abilitiesDiv.appendChild(cardHiddenAbilityDiv);

  cardStats.appendChild(cardAbilityContainer);

  cardsContainer.appendChild(card);
};

export default Card;
