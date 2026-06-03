import { useState } from "react";

function Card(props) {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="card">

      <h3>{props.nombre}</h3>

      <p>
        <strong>{props.pais}</strong>
      </p>

      <button onClick={() => setMostrar(!mostrar)}>
        {mostrar
          ? "Ocultar Información"
          : "Mostrar Información"}
      </button>

      {mostrar && (
        <>
          <img
            src={props.imagen}
            alt={props.nombre}
            className="imagen-maravilla"
          />

          <p className="descripcion">
            {props.descripcion}
          </p>
        </>
      )}

    </div>
  );
}

export default Card;