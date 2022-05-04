import { useState, useEffect } from "react";
import { ContextPokemonsUrl } from "./ContextPokemonsUrl";
import axios from "axios";
import useRequestData from "../hooks/RequestData";

const GlobalState = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  const pokemonUrl = useRequestData('https://pokeapi.co/api/v2/pokemon?limit=20')


  const states = { pokemons, pokedex };
  const setters = { setPokedex };
  const requests = {};

  const getPokemon = async (name, array) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      array.push(response.data)
      if (array.length === 20) {
        const orderList = array.sort((a, b) => {
          return a.id - b.id
        })
        setPokemons(orderList)
      }
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const list = []
    pokemonUrl && pokemonUrl.forEach((poke) => {
      getPokemon(poke.name, list)
    })

  }, [pokemonUrl])

  return (
    <ContextPokemonsUrl.Provider value={{ states, setters, requests }}>
      {props.children}
    </ContextPokemonsUrl.Provider>
  );
};

export default GlobalState;