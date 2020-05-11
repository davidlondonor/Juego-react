import React from "react";
// import ReactDOM from "react-dom";
import instrucciones from "./instrucciones.css";

function Instrucciones() {
    return (
        <div className="instrucciones">
            <h1> Instrucciones </h1>
            <p>
                {" "}
                1. Selecciona la baraja, tienes la oportunidad de que te salga
                un tesoro que te preoporcione alguna propiedad para seguir
                compitiendo en el siguiente nivel o un villano con el que vas a
                competir.
            </p>
            <br />
            <p>
                2. En la sala de juego aparece al azar el villano en el que
                debes competir.
            </p>
            <br />
            <p>
                3. Luego debes seleccionar el campeón que quieres que vaya a
                competir con el villano que te aparece en pantalla, puedes mirar
                sus características para elegir el campeón que derrotará al
                villano.
            </p>
            <br />
            <p>
                4. Puedes seguir avanzando hasta que acomules la mayor cantidad
                de logros.
            </p>
            <div className="botonesInferiores">

            <input type="Button" value="Inicio" />
            <input type="Button" value="Ir a jugar" />
            </div>
        </div>
    );
}

export default Instrucciones;
