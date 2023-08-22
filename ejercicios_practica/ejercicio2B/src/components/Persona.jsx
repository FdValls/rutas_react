import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Persona() {
  const { nombre = "no-encontrado" } = useParams();
  const { apellido = "no-encontrado" } = useParams();

  console.log(nombre)
  console.log(apellido)

  const navigate = useNavigate();

  return (
    <div>
      <h1>Tu nombre es: {nombre} {apellido}</h1>
    </div>
  );
}

export default Persona;
