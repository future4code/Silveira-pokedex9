import { useNavigate } from "react-router-dom";
import { goToPage } from "../routes/cordinator";


export default function HomePage() {
    const nav = useNavigate()


    return (
      <div>
        <h1>HomePage</h1>
        <button onClick={()=>goToPage(nav,'/pokedex')}>Pokedex</button>
        <button onClick={()=>goToPage(nav,'/pokeInfo')}>Info</button>
      </div>
    );
  }