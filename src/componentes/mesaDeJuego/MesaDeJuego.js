import React from 'react';
// import ReactDOM from 'react-dom';
import mesadejuego from "./mesadejuego.css";
import imagenDeBaraja from "../../images/baraja.png";


function MesaDeJuego() {
    return (
      <div className="MesaDeJuego">
      <div>

          <p>
            hola desde Mesa de Juego
          </p>
      </div>
          <div>

          <img src={imagenDeBaraja} className="imgBaraja" alt="image" />
          </div>
          
      </div>
    );
  }
  
  export default MesaDeJuego;