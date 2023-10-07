import React from "react"
import  "../stylesheets/Testimonio.css"

function Testimonio(props){  
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src="https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png" alt="Foto de Emma" />

            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> {props.name} en {props.country}</p>
                <p className="cargo-testimonio">{props.cargo} en {props.empresa}</p>
                <p className="texto-testimonio"> {props.testimonio}</p>
            </div>
        </div>
    )
}

export default Testimonio;