import axios from "axios";
import { useState } from "react";

export default function RequestData(url){
    const [data,setData] = useState()

    const getData = ()=> {
        axios.get(url)
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return[data, getData]

}