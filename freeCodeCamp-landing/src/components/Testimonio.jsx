import React from "react"
import  "../stylesheets/Testimonio.css"
// componente de testimonio
//import Emma from "../src/imagenes/testimonio-Emma.png" //imageenes de freecodecamp
//import shawn from "../src/imagenes/testimonio-shawn.png"//imageenes de freecodecamp
function Testimonio(props){  
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src={props.imagen} alt="Foto de Emma" />

            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> <strong>{props.name}</strong> en {props.country}</p>
                <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong> </p>
                <p className="texto-testimonio"> {props.testimonio}</p>
            </div>
        </div>
    )
}

export default Testimonio;
