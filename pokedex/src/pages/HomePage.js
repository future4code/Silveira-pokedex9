import { useNavigate } from "react-router-dom";
import { goToPage } from "../routes/cordinator";
import styled from "styled-components";
import pokemonLogo from '../data/imagens/pokemon.png'
import useRequestData from "../hooks/RequestData";
import { useEffect, useState } from "react";
import axios from "axios";
import PokeCard from '../components/pokeCard/PokeCard'

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
  const [pokemons, setPokemons] = useState()
  const [pokemonList] = useRequestData('https://pokeapi.co/api/v2/pokemon?limit=20/')


  const pokeCard = pokemonList && pokemonList.map((pokemon)=>{
    return (<PokeCard
      key={pokemon.name}
      url={pokemon.url}
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