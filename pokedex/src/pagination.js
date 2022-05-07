import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
display: flex;
gap: 10px;
justify-content: center;
list-style: none;
padding: 10px;
margin: auto;
margin-bottom: 10px;
width: 250px;
border: solid 2px;
border-radius: 10px;

button{
    font-size: 20px;
}
`

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2

const Pagination = ({limit,total,offSet, setOffSet})=>{
    const current = offSet ? (offSet / limit) + 1 : 1;
    const pages = Math.ceil(total / limit)
    const first = Math.max(current - MAX_LEFT, 1)

    console.log(pages)
    return (
        <Ul>
            {Array.from({ length: Math.min(MAX_ITEMS , pages) })
            .map((undef,i)=>{
                return i + first
            }).map((page)=>{
                return (
                    <li>
                        <button onClick={()=> setOffSet((page -1) * limit)}>{page}</button>
                    </li>
                )
            })}
        </Ul>
    )
}

export default Pagination;