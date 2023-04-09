// Iteration 1: All Fire Pokemons- get the array of all Fire type pokemons

function getAllFirePokemons(arrayOfPokemon) {
  const allFirePokemons = arrayOfPokemon.filter((pokemon) => {
    return pokemon.type.includes("Fire");
  });
  return allFirePokemons;
}

// Iteration 2: Shortest Pokemon- find the `name` of the shortest pokemon

function shortestPokemon(arrayOfPokemon) {
  if (arrayOfPokemon.length === 0) {
    return 0;
  }

  const newArryOfPokemonWithHeight = arrayOfPokemon.map((pokemon) => {
    const heightString = pokemon.height.split(" ");
    const heightNumber = Number(heightString[0]);
    return {
      name: pokemon.name,
      height: heightNumber,
    };
  });

  function compare(a, b) {
    if (a.height < b.height) return -1; // a is less than b
    if (a.height > b.height) return 1; // a is greater than b
    if (a.height === b.height) return 0; // a equals b
  }
  
  const newArryOfPokemonWithHeightSorted = newArryOfPokemonWithHeight.sort(compare);
  return newArryOfPokemonWithHeightSorted[0].name
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons

// Iteration 4: images for the first 10 `Ground`  Pokemons

// Iteration 5: Find all pokemon names heavier than Pikachu

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
