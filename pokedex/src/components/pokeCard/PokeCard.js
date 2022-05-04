import axios from "axios";
import { useEffect, useState } from "react";


export default function PokeCard(props) {
  

  return (
    <div>
      <h1>{props.nome}</h1>
      <p>{props.peso}</p>
      <button onClick={() => props.addPokedex(props.pokemon)}>Add Pokedex</button>
    </div>
  );
}


// const [info, setInfo] = useState()

//   const getInfoPokemon = () => {
//     axios.get(props.url)
//       .then((res) => {
//         setInfo(res.data)
//       })
//       .catch((err) => {
//         console.log(err)
//       })
//   }

//   useEffect(() => {
//     getInfoPokemon()
//   }, [])


{/* <h1>{info && info.name}</h1>
      <p>weight: {info && info.weight}</p>
      <button onClick={() => props.addPokedex(props.pokemon)}>Adicionar a Pokedex</button> */}