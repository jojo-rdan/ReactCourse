import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import './App.css';
import Propiedades from './components/Propiedades';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Editar <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </section>
        <section>
          <Componente saludo='Hola soy un componente desde props'/>
          <hr/>
          <Propiedades 
          cadena="Esto es una cadena de texto"
          numero={19}
          booleano={false}
          arreglo={[1,2,3]}
          obj={{name: "Jordan", apellido: "González", edad: 140}}
          funcion={num => num*num}
          elementoReact={<i>Esto es un elemento React</i>}
          componenteReact={<Componente saludo="Soy un componente de React pasado como props"/>}
          />
          <hr/>
          <Estado/>
          <hr/>
          <RenderizadoCondicional/>
          <hr/>
          <RenderizadoElementos/>
        </section>
      </header>
    </div>
  );
}


export default App;
