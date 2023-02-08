import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/header.jsx";
import Pokemon from "./components/pokemon.jsx";
import { filterPokemon, arrayStringToUpperCase } from "./util/helperFuncs.jsx";
import { flushSync } from 'react-dom';

function App() {
  //Holds the state of the whole pokemon array of pokemon objects
  const [allPokemon, setAllPokemon] = useState([]);
  //state values grabbed from the search input text boxes
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonWeaknesses, setPokemonWeaknesses] = useState("");
  
  async function getPokemon() {
    try {
      let res = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
      );
      let pokemonArray = await res.json();
      console.log(pokemonArray);
      setAllPokemon(arrayStringToUpperCase(pokemonArray));
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getPokemon();
  }, []);

  //Derived states
  const filteredPokemon = filterPokemon(
    allPokemon,
    pokemonName,
    pokemonType,
    pokemonWeaknesses
  );


  return (
    <div className="App">
      <div className="d-flex justify-content-center align-items-center wrap">
        <div className="header">
          <Header />
        </div>
        <div className="pokemonBody">
          <div className="form-control-group">
            <form>
              <label htmlFor="pokemon-name">Name:</label>
              <input
                type="text"
                name="pokemon-name"
                id="pokemon-name"
                value={pokemonName}
                placeholder="Ex. Bulbasaur"
                onChange={(event) => {
                  flushSync(() => {setPokemonName(event.target.value)});
                }}
              />
              <label htmlFor="pokemon-type">Type:</label>
              <input
                name="pokemon-type"
                id="pokemon-type"
                type="text"
                value={pokemonType}
                placeholder="Ex. Grass"
                onChange={(event) => {
                  setPokemonType(event.target.value);
                }}
              />
              <label htmlFor="pokemon-weaknesses">Weaknesses:</label>
              <input
                name="pokemon-weaknesses"
                id="pokemon-weaknesses"
                type="text"
                value={pokemonWeaknesses}
                placeholder="Ex. Fire"
                onChange={(event) => {
                  setPokemonWeaknesses(event.target.value);
                }}
              />
            </form>
          </div>
          {filteredPokemon.length > 0
            ? filteredPokemon.map((item) => {
                return (
                  <Pokemon
                    key={item.id}
                    pokemonName={item.name}
                    pokemonNum={item.num}
                    pokemonType={item.type}
                    pokemonWeaknesses={item.weaknesses}
                    imgSrc={item.img}
                  />
                );
              })
            : (allPokemon.pokemon) && allPokemon.pokemon.map((item) => {
                return (
                  <Pokemon
                    key={item.id}
                    pokemonName={item.name}
                    pokemonNum={item.num}
                    pokemonType={item.type}
                    pokemonWeaknesses={item.weaknesses}
                    imgSrc={item.img}
                  />
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default App;
