import React from 'react';
import ReactDOM from 'react-dom';
//componentes hijos
import Inicio from './componentes/inicio/Inicio';
import Instrucciones from "./componentes/instrucciones/Instrucciones";
import SalaDeJuego from "./componentes/salaDeJuego/salaDeJuego";


class App extends React.Component {
  constructor(props) {
    super(props)};
    
    render() {
      return (
        <div>
    <Inicio />
    <Instrucciones />
    <SalaDeJuego />
    </div>
      )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))


