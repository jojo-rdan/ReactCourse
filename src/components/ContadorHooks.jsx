import React, {useState} from "react";

export default function ContadorHooks(props){
    const [counter, setCounter] = useState(0);
    const sumar = () => setCounter(counter + 1);
    const restar = () => setCounter(counter - 1);
    return(
        <>
        <h2>Hooks - useState</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <h3>{props.titulo}: {counter}</h3>
        </>
    )
}

ContadorHooks.defaultProps = {
    titulo: "Clicks",
}