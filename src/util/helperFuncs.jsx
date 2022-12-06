export default function filterPokemon(
  allPokemon = [],
  name = "",
  type = "",
  weakness = ""
) {
  let filteredPokemon = [];

  if (allPokemon.pokemon) {

    console.log(name, type, weakness);

    let fullList = allPokemon.pokemon;
    filteredPokemon = allPokemon.pokemon;

    if (name){
        //Filter fullList based on the name
        filteredPokemon = filteredPokemon.filter((pokemon) => {
            return pokemon.name == name;
        });
        console.log(filteredPokemon);
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

    //console.log(filteredPokemon);
    return filteredPokemon;
  }

  return filteredPokemon;
}
