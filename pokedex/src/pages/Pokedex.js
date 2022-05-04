import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../routes/cordinator";
import pokemonLogo from '../data/imagens/pokemon.png'
import React, { useContext } from "react";
import { ContextPokemonsUrl } from "../context/ContextPokemonsUrl";
import PokedexCard from "../components/pokedexCards/PokedexCard";


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
  const { states, setters } = useContext(ContextPokemonsUrl)
  const { pokedex } = states;
  const { setPokedex } = setters;


  const renderPokedex = states.pokedex.map((pokemon) => {
    return (
      <PokedexCard key={pokemon.name} nome={pokemon.name} peso={pokemon.weight}/>
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