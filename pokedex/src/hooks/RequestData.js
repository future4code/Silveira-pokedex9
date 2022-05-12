import axios from "axios";
import { useEffect, useState } from "react";

export default function useRequestData(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then((res) => {
                setData(res.data.results);
            })
            .catch((err) => {
                alert("Ocorreu um erro, tente novamente");
                console.log(err);
            })

    }, [url])



    return data;
}