import React from "react";
import "../../estilos/News/News.css";

function New(props) {
  return (
    <div className="contenedor-testimonio">
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">{props.nombre}</p>
        <p className="cargo-testimonio">{props.cargo}</p>
        <p className="texto-testimonio">{props.testimonio}</p>
        <img
          className="imagen-testimonio"
          src={require(`../../imagenes/${props.imagen}.png`)}
          alt="Optimen"
        />
      </div>
    </div>
  );
}
export default New;
