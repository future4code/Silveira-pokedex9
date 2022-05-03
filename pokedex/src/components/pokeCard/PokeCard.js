import axios from "axios";
import { useEffect, useState } from "react";


export default function PokeCard(props) {
    const [info,setInfo]= useState()

    const getInfoPokemon = ()=>{
        axios.get(props.url)
        .then((res)=>{
            setInfo(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
   

    useEffect(()=>{
        getInfoPokemon()
    },[])

  return (
    <div>
      <h1>{info && info.name}</h1>
      <h1>{info && info.weight}</h1>
    </div>
  );
}

