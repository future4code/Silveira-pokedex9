import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToPage } from "../../routes/cordinator";
import { GlobalStateContext } from "../../context/GlobalStateContext"
import { useContext } from "react";


const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
height: 300px;
border-radius: 10px;
margin: 30px;
overflow: hidden;
background-color: ${ props => (!props.tipo) ? 'background-color' : props.tipo };
box-shadow: 6px 6px 10px 0px rgba(0, 0, 0, 0.664) ;

:hover{
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.664) ;
}

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


export default function PokeCard(props) {
  const { states, setters } = useContext(GlobalStateContext)
  const nav = useNavigate()

  const cor = (tipo) => {
    switch (tipo) {
      case 'fire':
        return '#AB1F24';

      case 'water':
        return '#1552E1';

      case 'grass':
        return '#097A39';

      case 'bug':
        return '#1C4B27';

      case 'dark':
        return '#040707';

      case 'dragon':
        return '#448A95';

      case 'electric':
        return '#FAFA72';

      case 'fairy':
        return '#961A45';

      case 'fighting':
        return '#994025';

      case 'flying':
        return '#4A677D';

      case 'ghost':
        return '#33336B';

      case 'ground':
        return '#A8702D';

      case 'ice':
        return '#86D2F5';

      case 'normal':
        return '#75525C';

      case 'poison':
        return '#5E2D89';

      case 'psychic':
        return '#A52A6C';

      case 'rock':
        return '#48190B';

      case 'steel':
        return '#60756E';

      default:
        return 'white';
    }

  }

  const rendDetail = (name) => {
    goToPage(nav, `/pokeInfo/${name}/${"home"}`)
    console.log(name)
}

const SetInfo = (info) => {
  setters.setPokemonInfo(info)
}

  return (
    <Container tipo={cor(props.pokemon.types[0].type.name)}>
      <img src={props.pokemon.sprites.other.dream_world.front_default} />
      <h1>{props.pokemon.name}</h1>
      <Menu>
        <button onClick={() => props.addPokedex(props.pokemon)}>Add Pokedex</button>
        <button onClick={() => {rendDetail(props.pokemon.name); SetInfo(props.pokemon)}}>Info</button>
      </Menu>
    </Container>
  );
}
