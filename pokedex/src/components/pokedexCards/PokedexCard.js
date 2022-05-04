import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';


const PokedexCard = (props) => {

    // const { name, url } = props.pokemon
    // const [info, setInfo] = useState()

    // const getInfoPokemon = () => {
    //     axios.get(url)
    //         .then((res) => {
    //             setInfo(res.data)
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    // }

    // useEffect(() => {
    //     getInfoPokemon()
    // }, [])

    return (
        <div>
            <h1>{props.nome}</h1>
            <p>weight: {props.peso}</p>
            <button onClick={()=>props.removePoke(props.pokemon)}>Remover</button>
        </div>
    )
}

export default PokedexCard;