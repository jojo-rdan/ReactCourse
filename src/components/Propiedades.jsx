import React from "react";
import PropTypes from "prop-types"

export default function Propiedades(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{`${props.obj.name} 
                ${props.obj.apellido} edad: 
                ${props.obj.edad}`}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}

// Esta es una forma de cargar props por  defecto
// sin necesidad de usar componentes del padre
Propiedades.defaultProps = {
    porDefecto: "Las Props"
}

// Esto es una libreria que nos permite agregar el tipo de dato
// a los props que queramos, es como tipar las cosas tipo TS
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired
}