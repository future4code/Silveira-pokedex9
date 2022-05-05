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


export default function PokeInfo() {
  const nav = useNavigate()
  const params = useParams()
  const { states, setters } = useContext(GlobalStateContext)
  const [pokeTarget, setPokeTarget] = useState()



  

  useEffect(() => {

  },[])


  return (
    <Container>
      <header>
        <img src={pokemonLogo} />
        <Menu>
          <button onClick={() => goToPage(nav, '/pokedex')}>voltar</button>
        </Menu>
      </header>
      <h1>Info</h1>
      <h1>{states.pokemonInfo.name}</h1>
      <p>{states.pokemonInfo.weight}</p>
    </Container>
  );
}