import React from 'react';
import ReactDOM from 'react-dom';
//componentes hijos
import MesaDeJuego from '../mesaDeJuego/MesaDeJuego';
import Baraja from '../bajara/Baraja';
import Hero from '../hero/Hero';
import Campeones from '../campeones/Campeones';

function SalaDeJuego() {
  return (
   <section>
        <div className="SalaDeJuego">
            <p>
                 hola desde Sala de Juego
            </p>     
        </div>
        <div>
            <MesaDeJuego />
            <Baraja />
            <Hero />
            <Campeones />
        </div>
    </section>

  );
}

export default SalaDeJuego;