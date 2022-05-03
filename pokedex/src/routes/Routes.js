import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Pokedex from "../pages/Pokedex"
import PokeInfo from "../pages/PokeInfo"


export function Router() {

    return (      
            <BrowserRouter>
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path='pokedex' element={<Pokedex />} />
                    <Route path='pokeInfo' element={<PokeInfo />} />
                </Routes>
            </BrowserRouter>
    )
}