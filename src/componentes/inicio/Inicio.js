import React from 'react';
import ReactDOM from 'react-dom';

import inicio from "./inicio.css";
import imagenInicio from "../../images/imagenInicio.png";

function Inicio() {
  return (
    <div className="inicio">
     
        <h1>
          Bienvenidos al Juego
          <br/> 
          Campeones VS Villanos
        </h1>
        <br/>
        <div id="logo">
        <img src={imagenInicio} />
        </div>
        <input type="Button" value="Instrucciones" />
        <input type="Button" value="Jugar" />
        
    </div>
  );
}

export default Inicio;
