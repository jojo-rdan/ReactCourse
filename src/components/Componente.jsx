import React, {Component} from "react";

// Version extra expresiva
const Componente = props => <h2>{props.saludo}</h2>

// componente basado en clase
// class Componente extends Component{
//     render(){
//         return <h2>{this.props.saludo}</h2>
//     }
// }

// componente funcional
// function Componente(props){
//     return (
//         <>
//             <h2>{props.saludo}</h2>
//         </>
//     )
// }

export default Componente