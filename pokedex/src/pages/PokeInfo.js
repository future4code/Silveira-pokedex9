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

const Display = styled.div`
display: flex;
justify-content: center;
align-items: center;
min-height: 600px;
`

const InfoGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px;

h4{
  margin-bottom: 50px;
}

.a{
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 200px;
 
  img{
    border: solid 2px;
    margin: 5px;
  }
}

.b{
  text-align: center;
  border: solid 2px;
  height: 400px;
  width: 200px;
}

.d{
  text-align: center;
  height: 400px;
  width: 250px;
}

@media screen and (min-width: 320px) and (max-width: 480px) {
  grid-template-columns: 1fr;
  

  .a{
    display: flex;
    flex-direction: column;
    height: 400px;
    width: 200px;
  
    img{
      border: solid 2px;
      margin: 5px;
    }
  }
  .d{
    width: 200px;
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

const Type = styled.div`
display: flex;
justify-content: space-evenly;
border: solid 2px;
height: 60px;
`

const Moves = styled.div`
border: solid 2px;
margin-top: 10px;
height: 322px;
`

const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
border: solid 2px;
border-radius: 10px;
width: 95%;
margin: 20px;
padding: 20px;
background-color: transparent;

h1{
  @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
  font-family: 'Alfa Slab One', cursive;
  color: blue;
  background-color: yellow;
  /* -webkit-text-stroke-width: 3.5px;
  -webkit-text-stroke-color: blue; */
  font-size: 40px;
  padding: 0 30px;
  padding-bottom: 10px;
  border-radius: 20px;
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


export default function PokeInfo() {
  const nav = useNavigate()
  const params = useParams()
  const { states, setters } = useContext(GlobalStateContext)


  if (states.pokemonInfo == undefined) {
    goToPage(nav, '/')
  } else {

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

    const stats = states.pokemonInfo.stats.map((value) => {
      return <p key={value.stat.name}>{value.stat.name}: {value.base_stat}</p>
    })

    const type = states.pokemonInfo.types.map((tipo) => {
      return <h3>{tipo.type.name}</h3>
    })

    const moves = states.pokemonInfo.moves.filter((move, i) => {
      return i < 5
    }).map((m) => {
      return <p key={m.move.name}>{m.move.name}</p>
    })

    return (
      <Container>
        <header>
          <img className="logo" src={pokemonLogo} />
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
              <div className="a">
                <img src={states.pokemonInfo.sprites.front_default} />
                <img src={states.pokemonInfo.sprites.back_default} />
              </div>
              <div className="b">
                <h4>Stats</h4>
                {stats}
              </div>
              <div className="d">
                <Type>
                  {type}
                </Type>
                <Moves>
                  <h4>Moves</h4>
                  {moves}
                </Moves>
              </div>

            </InfoGrid>
          </Card>
        </Display>
      </Container>
    );
  }


}