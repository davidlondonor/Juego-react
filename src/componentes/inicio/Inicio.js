import React from "react";
// import ReactDOM from "react-dom";
import inicio from "./inicio.css";
import imagenInicio from "../../images/imagenInicio.png";

function Inicio() {
    return (
        <div className="inicio">
            <div className="tituloPrincipal">
                <h2>
                    Bienvenidos al Juego
                    <br />
                    Campeones VS Villanos
                </h2>
            </div>
            <br />
            <div id="logo" >
                <img className="imagen" src={imagenInicio} />
            </div>
            <div className="botonesInferiores">
                <input type="Button" value="Instrucciones" />
                <input type="Button" value="Jugar" />
            </div>
        </div>
    );
}

export default Inicio;
