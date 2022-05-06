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

const Cards = styled.div`
display: grid;
justify-content: center;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
padding-top: 30px;

@media screen and (min-width: 320px) and (max-width: 480px) {
    grid-template-columns: 1fr;
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

    setters.setPokedex(newPokedexList)
    const newPokeList = [...states.pokemons,poke];
    const newPokeListOrder = newPokeList.sort((a,b)=>{
      return a.id-b.id
    })
    setters.setPokemons(newPokeListOrder);
}
  const renderPokedex = states.pokedex.map((pokemon) => {
    return (
      <PokedexCard key={pokemon.id} removePoke={RemoveFromPokedex} pokemon={pokemon}/>
    )
  })

  return (
    <Container>
      <header>
        <img className="logo" src={pokemonLogo} />
        <Menu>
          <button onClick={() => goToPage(nav, '/')}>Home</button>
        </Menu>
      </header>
      <Div></Div>
      <Cards>
      {renderPokedex}
      </Cards>
    </Container>
  );
}