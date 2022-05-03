import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequestData(url){
    const [data,setData] = useState()

    const getData = ()=> {
        axios.get(url)
        .then((res)=>{
            setData(res.data.results)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    useEffect(()=>{
        getData()
    },[url])

    return[data, getData]

}