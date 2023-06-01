function filterPokemon(
  allPokemon,
  name = "",
  type = "",
  weakness = ""
) {
  let filteredPokemon = [];

  if (allPokemon.pokemon) {

    filteredPokemon = allPokemon.pokemon;

    if (name){
        //Filter fullList based on the name
        filteredPokemon = filteredPokemon.filter((pokemon) => {
            return pokemon.name.toUpperCase().includes(name.toUpperCase());
        });
    }

    if (type){
        //Filter fullList based on the type
        filteredPokemon = filteredPokemon.filter((pokemon) => {
            return pokemon.type.includes(type.toUpperCase());
         });
    }

    if (weakness){
        //Filter fullList based on the type
        filteredPokemon = filteredPokemon.filter((pokemon) => {
            return pokemon.weaknesses.includes(weakness.toUpperCase());
        });
    }

    return filteredPokemon;
  }

  return filteredPokemon;
}

//Side effect function that mutates the JSON object to convert all types and weaknesses to uppercase so that
// they can be queried using any capitalization in the search query input
function arrayStringToUpperCase(allPokemonObject){
for (let i = 0; i < allPokemonObject.pokemon.length; i++){
  allPokemonObject.pokemon[i].type = allPokemonObject.pokemon[i].type.map((type) => {
    return type.toUpperCase();
  })
  allPokemonObject.pokemon[i].weaknesses = allPokemonObject.pokemon[i].weaknesses.map((weaknesses) => {
    return weaknesses.toUpperCase();
  })
}
return allPokemonObject;
};

export { filterPokemon, arrayStringToUpperCase };