import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function InicioSubRuta() {
  const [text, setText] = useState("Inicio Sub Ruta");

  function handerInfo(param) {
    setText(param);
  }

  return (
    <div>
      <h1>Inicio subrutas</h1>
      <h2>Navegacion de subrutas</h2>
      <div>
        <Link
          to="/subrutas"
          style={{ color: "#E5E3DE" }}
          onClick={() => {
            handerInfo("Inicio Sub Ruta");
          }}
        >
          Inicio Sub Ruta
        </Link>
      </div>
      <div>
        <Link
          to="/subrutas"
          style={{ color: "#E5E3DE" }}
          onClick={() => {
            handerInfo("Subruta1");
          }}
        >
          Subruta1
        </Link>
      </div>
      <div>
        <Link
          to="/subrutas"
          style={{ color: "#E5E3DE" }}
          onClick={() => {
            handerInfo("Subruta2");
          }}
        >
          Subruta2
        </Link>
      </div>
      <h1 style={{color: "#26A8BC"}}>{text}</h1>
    </div>
  );
  
}

export default InicioSubRuta;
