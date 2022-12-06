export default function filterPokemon(
  allPokemon = [],
  name = "",
  type = "",
  weakness = ""
) {
  let filteredPokemon = [];

  if (allPokemon.pokemon) {


    let fullList = allPokemon.pokemon;
    filteredPokemon = allPokemon.pokemon;

    if (name){
        //Filter fullList based on the name
        filteredPokemon = filteredPokemon.filter((pokemon) => {
            return pokemon.name == name;
        });
    }

    if (type){
        //Filter fullList based on the type
        filteredPokemon = filteredPokemon.filter((pokemon) => {
            return pokemon.type.includes(type);
         });
    }

    if (weakness){
        //Filter fullList based on the type
        filteredPokemon = filteredPokemon.filter((pokemon) => {
            return pokemon.weaknesses.includes(weakness);
        });
    }

    return filteredPokemon;
  }

  return filteredPokemon;
}
