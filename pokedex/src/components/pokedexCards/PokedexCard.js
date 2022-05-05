import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goToPage } from "../../routes/cordinator";
import React, { useContext } from "react";
import { GlobalStateContext } from "../../context/GlobalStateContext";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 300px;
border-radius: 10px;
margin: 30px;
overflow: hidden;
background-color: white;

img{
  width: 80%;
  height: 170px;
  margin-top: 20px;
}

h1{
  margin: 0;
  padding: 0;
}

p{
  margin: 0;
  padding: 0;
}
`

const Menu = styled.div`
display: flex;
width: 100%;
height: 30px;
button{
  background-color: black;
  color: white;
  border: none;
  width: 100%;

  :hover{
    background-color: rgb(46, 46, 46);
    cursor: pointer;
  }
}
`


const PokedexCard = (props) => {
    const nav = useNavigate()
    const { states, setters } = useContext(GlobalStateContext)

    const rendDetail = (name) => {
        goToPage(nav, `/pokeInfo/${name}/${"pokedex"}`)
        console.log(name)
    }

    const SetInfo = (info) => {
        setters.setPokemonInfo(info)
    }

    return (
        <Container tipoPokemon={props.pokemon.types[0].type.name}>
            <img src={props.pokemon.sprites.other.dream_world.front_default} />
            <h1>{props.nome}</h1>
            <Menu>
                <button onClick={() => props.addPokedex(props.pokemon)}>Add Pokedex</button>
                <button onClick={() => {rendDetail(props.pokemon.name); SetInfo(props.pokemon)}}>Info</button>
            </Menu>
        </Container>
    )
}

export default PokedexCard;