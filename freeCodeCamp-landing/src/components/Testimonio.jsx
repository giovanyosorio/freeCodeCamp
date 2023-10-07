import React from "react"
import  "../stylesheets/Testimonio.css"

function Testimonio(){  
    return(
        <div className="contenedor-testimonio">
            <img className="imagen-testimonio" src="https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png" alt="Foto de Emma" />

            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"> Emma Bostian en Suecia</p>
                <p className="cargo-testimonio">Ingeniera de software en spotifiy</p>
                <p className="texto-testimonio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos recusandae incidunt quae animi modi id, aut iure neque, repellat eius a nobis! Veritatis sequi quos maxime error itaque aspernatur officiis!</p>
            </div>
        </div>
    )
}

export default Testimonio;