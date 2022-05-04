import { useNavigate } from "react-router-dom";
import { goToPage } from "../routes/cordinator";
import styled from "styled-components";
import pokemonLogo from '../data/imagens/pokemon.png'
import useRequestData from "../hooks/RequestData";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import PokeCard from '../components/pokeCard/PokeCard'
import { ContextPokemonsUrl } from "../context/ContextPokemonsUrl";

const Container = styled.div`

header{
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  height: 70px;

  img{
    margin-left: 20px;
    height: 100%;
  }
}
`

const Menu = styled.div`
display: flex;
gap: 15px;
margin-right: 60px;

button{
  border: none;
  border-radius: 7px;
  background-color: #FFCE00;
  font-weight: bolder;
  font-size: 17px;
  color: #15468D;
  width: 100px;
  height: 30px;
}
`


export default function HomePage() {
  const nav = useNavigate()
  const { states, setters } = useContext(ContextPokemonsUrl)
  const pokemonList = useRequestData('https://pokeapi.co/api/v2/pokemon?limit=20/')



  const addToPokedex = (newItem) => {

    const index = states.pokedex.findIndex((i) => i.name === newItem.name);

    const newPokedex = [...states.pokedex];

    if (index === -1) {
      const pokedexItem = { ...newItem, amount: 1 }
      newPokedex.push(pokedexItem)
      console.log("Adicionado a pokedex!")
    } else {
      newPokedex[index] = newPokedex[index];
    }

    setters.setPokedex(newPokedex);
  }

  const pokeCard = states.pokemons && states.pokemons.map((pokemon) => {
    return (<PokeCard
      key={pokemon.id}
      nome={pokemon.name}
      peso={pokemon.weight}
      addPokedex={addToPokedex}
      pokemon={pokemon}
    />)
  })

  return (
    <Container>
      <header>
        <img src={pokemonLogo} />
        <Menu>
          <button onClick={() => goToPage(nav, '/pokedex')}>Pokedex</button>
        </Menu>
      </header>
      {pokeCard}
    </Container>
  );
}


// key={pokemon.name}
      // url={pokemon.url}
      // pokemon={pokemon}
      // addPokedex={addToPokedex}