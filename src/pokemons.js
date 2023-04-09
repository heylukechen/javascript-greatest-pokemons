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
    if (a.height < b.height) return -1;
    if (a.height > b.height) return 1;
    if (a.height === b.height) return 0;
  }

  const newArryOfPokemonWithHeightSorted =
    newArryOfPokemonWithHeight.sort(compare);
  return newArryOfPokemonWithHeightSorted[0].name;
}

// Iteration 3: candy_count average - average of `candy_count` for all the pokemons
function candyAverage(arrayOfPokemon) {
  if (arrayOfPokemon.length === 0) {
    return 0;
  }

  const sum = arrayOfPokemon.reduce((accu, currentValue) => {
    if (typeof currentValue.candy_count === "number") {
      return accu + currentValue.candy_count;
    } else {
      return accu;
    }
  }, 0);

  let average = sum / arrayOfPokemon.length;
  return Math.round(average * 100) / 100;
}

// Iteration 4: images for the first 10 `Ground`  Pokemons
function getGroundPokeImg(arrayOfPokemon) {
  if (arrayOfPokemon.length === 0) {
    return 0;
  }

  const groundPokemon = arrayOfPokemon.filter((pokemon) => {
    return pokemon.type.includes("Ground");
  });

  const firstTenGroundPokemon = groundPokemon.slice(0, 10).map((pokemon) => {
    return pokemon.img;
  });

  return firstTenGroundPokemon;
}

// Iteration 5: Find all pokemon names heavier than Pikachu

function getHeavyPokemons(arrayOfPokemon) {
  const clonedArray = Array.from(arrayOfPokemon);

  if (clonedArray.length === 0) {
    return 0;
  }

  const newArryOfPokemonWithWeight = clonedArray.map((pokemon) => {
    const weightString = pokemon.weight.split(" ");
    const weightNumber = Number(weightString[0]);
    return {
      name: pokemon.name,
      weight: weightNumber,
    };
  });

  const heavierThanPika = newArryOfPokemonWithWeight.filter((pokemon) => {
    return pokemon.weight > 6;
  });

  const onlyName = heavierThanPika.map((pokemon) => {
    return pokemon.name;
  });

  return onlyName;
}

// Iteration 6: Alphabetic Order - Order by name and print the first 20 names
function orderAlphabetically(arrayOfPokemon) {
  const clonedArray = Array.from(arrayOfPokemon);

  if (clonedArray.length === 0) {
    return 0;
  }

  const nameOnly = clonedArray.map((pokemon)=>{
    return pokemon.name
  });

  function compare(a, b) {
    if (a < b) return -1;
    if (a > b) return 1;
    if (a === b) return 0;
  }

  const arraySorted = nameOnly.sort(compare);

  if(arraySorted.length >= 20){
    return arraySorted.splice(0,20);
  } return arraySorted
  
}

// Iteration 7: Strong pokemons - return an array of first 15 pokemons, that have just one `weakness`. If there are less that 15, return all of them
