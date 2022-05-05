import { useNavigate, useParams } from "react-router-dom";
import { goToPage } from "../routes/cordinator";
import styled from "styled-components";
import pokemonLogo from '../data/imagens/pokemon.png'
import axios from "axios";
import useRequestData from "../hooks/RequestData";
import { GlobalStateContext } from "../context/GlobalStateContext";
import React, { useContext, useEffect, useState } from "react";

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

const Display = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 600px;
`

const InfoGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 10px;
`

const Div = styled.div`
position: sticky;
top: 80px;
background-color: black;
height: 5px;
`

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: solid 1px;
border-radius: 10px;
width: 95%;
height: 500px;
background-color: white;
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


export default function PokeInfo() {
  const nav = useNavigate()
  const params = useParams()
  const { states, setters } = useContext(GlobalStateContext)
  const [pokeTarget, setPokeTarget] = useState()


  const addToPokedex = (newItem) => {
    const index = states.pokemons.findIndex((i) => i.name === newItem.name);

    const newPokeList = [...states.pokemons];
    newPokeList.splice(index, 1)
    const newPokeListOrder = newPokeList.sort((a, b) => {
      return a.id - b.id
    })
    setters.setPokemons(newPokeListOrder);
    const newPokedexList = [...states.pokedex, newItem]
    const newPokedexListOrder = newPokedexList.sort((a, b) => {
      return a.id - b.id
    })
    setters.setPokedex(newPokedexListOrder)
    nav('/pokedex')
  }

  const RemoveFromPokedex = (poke) => {
    const index = states.pokedex.findIndex((i) => i.name === poke.name);

    const newPokedexList = [...states.pokedex]
    newPokedexList.splice(index, 1)

    setters.setPokedex(newPokedexList)
    const newPokeList = [...states.pokemons, poke];
    const newPokeListOrder = newPokeList.sort((a, b) => {
      return a.id - b.id
    })
    setters.setPokemons(newPokeListOrder);
    nav('/pokedex')
  }


  const pokeInfoAdd = () => {
    switch (params.origin) {

      case 'pokedex':
        return <button onClick={() => { RemoveFromPokedex(states.pokemonInfo) }}>Remover</button>

      case 'home':
        return <button onClick={() => { addToPokedex(states.pokemonInfo) }}>Adicionar</button>

      default:
        return <button>Erro</button>

    }
  }

  console.log(states.pokemonInfo)


  return (
    <Container>
      <header>
        <img src={pokemonLogo} />
        <Menu>
          <button onClick={() => goToPage(nav, -1)}>voltar</button>
          {pokeInfoAdd()}
        </Menu>
      </header>
      <Div></Div>
      <Display>
        <Card>
          <h1>{states.pokemonInfo.name}</h1>
          <InfoGrid>
            <div>imagem</div>
            <div>stats</div>
            <div>tipo</div>
            <div>Moves</div>

          </InfoGrid>
        </Card>
      </Display>
    </Container>
  );
}