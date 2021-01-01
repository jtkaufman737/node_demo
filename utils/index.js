const utils = {
  evolve: (pokemon) => {
    switch (pokemon) {
      case "dratini":
        pokemon = "dragonair";
        break;
      case "bulbasaur":
        pokemon = "ivysaur";
        break;
      case "charmander":
        pokemon = "charmeleon";
        break;
      case "eevee":
        const evolutions = [
          "vaporeon",
          "flareon",
          "jolteon",
          "umbreon",
          "espeon",
          "glaceon",
          "leafeon",
          "sylveon",
        ];
        pokemon = evolutions[Math.floor(Math.random() * evolutions.length)];
        break;
      default:
        pokemon = "No evolution";
        break;
    }

    return pokemon;
  },
};

module.exports = utils;
