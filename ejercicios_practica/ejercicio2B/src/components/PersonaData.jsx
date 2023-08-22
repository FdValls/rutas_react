import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const PersonaData = () => {
  const [name, setName] = useState("Tu Nombre");
  const [lastName, setLastName] = useState("Tu Apellido");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setName(e.currentTarget.nombre.value);
    setLastName(e.currentTarget.apellido.value);
    const nombre = e.currentTarget.nombre.value;
    const apellido = e.currentTarget.apellido.value;

    navigate(`/persona/${nombre}/${apellido}`);
  }

  const handleReset = () => {
    setName("Tu Nombre");
    setLastName("Tu Apellido");
    window.location.reload(); // Refrescar la página
  };

  return (
    <div>
      <h1>
        Tu nombre es: {name} {lastName}
      </h1>
      <form onSubmit={handleSubmit}>
        <input style={{ margin: "5px", padding: "10px" }} type="text" name="nombre" placeholder="Ingrese su nombre..." />
        <input
          style={{ margin: "5px", padding: "10px" }}
          type="text"
          name="apellido"
          placeholder={"Ingrese su apellido..."}
        />
        <button
          style={{ margin: "10px", backgroundColor: "green" }}
          type="submit"
          name="enviar"
          value={"Enviar"}
        >
          Enviar
        </button>
        <button
           style={{ margin: "1px", backgroundColor: "blue" }}
           type="button"
           name="reset"
           value={"Reset"}
           onClick={handleReset}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default PersonaData;
