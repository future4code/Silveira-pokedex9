import styled from "styled-components";

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


export default function PokeCard(props) {


  return (
    <Container tipoPokemon={props.pokemon.types[0].type.name}>
      <img src={props.pokemon.sprites.other.dream_world.front_default}/>   
      <h1>{props.pokemon.name}</h1>    
      <Menu>
      <button onClick={() => props.addPokedex(props.pokemon)}>Add Pokedex</button>
      <button>Info</button>
      </Menu>
    </Container>
  );
}
