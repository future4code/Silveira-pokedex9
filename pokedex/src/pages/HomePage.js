import { useNavigate } from "react-router-dom";
import { goToPage } from "../routes/cordinator";
import styled from "styled-components";
import pokemonLogo from '../data/imagens/pokemon.png'
import useRequestData from "../hooks/RequestData";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import PokeCard from '../components/pokeCard/PokeCard'
import { GlobalStateContext } from "../context/GlobalStateContext";



const Container = styled.div`

header{
  display: flex;
  position: sticky;
  top: 0px;
  justify-content: space-between;
  align-items: center;
  background-color: red;
  height: 80px;

  img{
    margin-left: 20px;
    height: 100%;
  }
}
`

const Div = styled.div`
position: sticky;
top: 80px;
background-color: black;
height: 5px;
`
const Cards = styled.div`
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
background-color: #8BB884;
padding-top: 30px;
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
  cursor: pointer;
}
`


export default function HomePage() {
  const nav = useNavigate()
  const { states, setters } = useContext(ContextPokemonsUrl)
  const { states, setters } = useContext(GlobalStateContext)
  const pokemonList = useRequestData('https://pokeapi.co/api/v2/pokemon?limit=20/')




  const addToPokedex = (newItem) => {
    const index = states.pokemons.findIndex((i) => i.name === newItem.name);

    const newPokeList = [...states.pokemons];
    newPokeList.splice(index,1)
    const newPokeListOrder = newPokeList.sort((a,b)=>{
      return a.id-b.id
    })
    setters.setPokemons(newPokeListOrder);
    const newPokedexList = [...states.pokedex,newItem]
    const newPokedexListOrder = newPokedexList.sort((a,b)=>{
      return a.id-b.id
    })
    setters.setPokedex(newPokedexListOrder)
    /* if (index === -1) {
      const pokedexItem = { ...newItem, amount: 1 }
      newPokedex.push(pokedexItem)
      console.log("Adicionado a pokedex!")
    } else {
      newPokedex[index] = newPokedex[index];
    } */

    
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
      <Div></Div>
      <Cards>
      {pokeCard}
      </Cards>    
    </Container>
  );
}


// key={pokemon.name}
      // url={pokemon.url}
      // pokemon={pokemon}
      // addPokedex={addToPokedex}