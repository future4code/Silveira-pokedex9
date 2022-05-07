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

  .logo{
    margin-left: 20px;
    height: 100%;
  }
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  header{
    height: 120px;
    flex-direction: column;
    justify-content: space-evenly;
  }
  .logo{
    margin-right: 20px;
    max-height: 50%;
  }
}
`


const Div = styled.div`
position: sticky;
top: 80px;
background-color: black;
height: 5px;

@media screen and (min-width: 320px) and (max-width: 480px) {
  top:120px;
}
`

const Cards = styled.div`
/* display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
background-color: #8BB884;
padding-top: 30px; */


/* @media screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
} */

display: flex;
flex-wrap: wrap;
justify-content: center;
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

@media screen and (min-width: 320px) and (max-width: 480px) {
  margin-right: 0px;
}
`


export default function HomePage() {
  const nav = useNavigate()
  const { states, setters } = useContext(GlobalStateContext)




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

  }

  const pokeCard = states.pokemons && states.pokemons.map((pokemon) => {
    return (<PokeCard
      key={pokemon.id}
      addPokedex={addToPokedex}
      pokemon={pokemon}
    />)
  })

  return (
    <Container>
      <header>
        <img className="logo" src={pokemonLogo} />
        <Menu>
          <button onClick={() => goToPage(nav, '/pokedex')}>Pokedex</button>
        </Menu>
      </header>
      <Div></Div>
      <Cards className="cards">
        {pokeCard}
      </Cards>    
    </Container>
  );
}