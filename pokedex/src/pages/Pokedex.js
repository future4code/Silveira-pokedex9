import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../routes/cordinator";
import pokemonLogo from '../data/imagens/pokemon.png'
import React, { useContext } from "react";

import PokedexCard from "../components/pokedexCards/PokedexCard";
import { GlobalStateContext } from "../context/GlobalStateContext";


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

export default function Pokedex() {
  const nav = useNavigate()
  const { states, setters } = useContext(GlobalStateContext)
  const { pokedex } = states;
  const { setPokedex } = setters;


  const RemoveFromPokedex = (poke) => {
    const index = states.pokedex.findIndex((i) => i.name === poke.name);

    const newPokedexList = [...states.pokedex]
    newPokedexList.splice(index,1)

    /* const newPokedexListOrder = newPokedexList.sort((a,b)=>{
      return a.id-b.id
    }) */
    setters.setPokedex(newPokedexList)
    const newPokeList = [...states.pokemons,poke];
    const newPokeListOrder = newPokeList.sort((a,b)=>{
      return a.id-b.id
    })
    setters.setPokemons(newPokeListOrder);
}
  const renderPokedex = states.pokedex.map((pokemon) => {
    return (
      <PokedexCard key={pokemon.id} nome={pokemon.name} peso={pokemon.weight} removePoke={RemoveFromPokedex} pokemon={pokemon}/>
    )
  })

  return (
    <Container>
      <header>
        <img src={pokemonLogo} />
        <Menu>
          <button onClick={() => goToPage(nav, '/')}>Voltar</button>
          <button onClick={() => goToPage(nav, '/pokeInfo')}>Info</button>
        </Menu>
      </header>
      <h1>Pokedex</h1>
      {renderPokedex}
    </Container>
  );
}