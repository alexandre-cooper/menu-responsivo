import { useState } from "react";
import DarkMode from "./components/DarkMode";

import Hero from './assets/hero.jpg';
export default function App(){

  const [active, setMode] = useState(false);
  const ToggleMode = () => {
    setMode(!active)
  }

  return(
    <div className="container">
     
           <div className={active? 'icon iconActive':'icon'} onClick={ToggleMode}>     
        <div className="hamburguer hamburguerIcon"></div>
            </div>

      <div className={active? 'menu menuOpen':'menu menuClose'}>
      <nav className="list">
      <span className="btn-dark"> <DarkMode/> </span>
        <ul className="listItems">
          <li> <a>Home</a> </li>
          <li> <a>Sobre</a> </li>
          <li> <a>Serviços</a> </li>
          <li> <a>Fale Conosco</a> </li>
        </ul>
      </nav>      
      </div>

        <section>
          <h1>WEB DESgner agencia</h1>
          <img width={'90%'} src={Hero}/>
        </section>

    </div>
  )
}