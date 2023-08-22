import React, { useState } from "react";
import { Link } from "react-router-dom";

function Contact() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [isNotEmpty, setIsNotEmpty] = useState(false);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Nombre:", name);
  };

  const toggleIsNotEmpty = () => {
    setIsNotEmpty(!isNotEmpty);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "initial",
        margin: "15px",
      }}
    >
      <h2>Componente de contacto</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: "center" }}>
        <div style={{ margin: "15px", textAlign: "initial" }}>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "15px",
            textAlign: "initial",
          }}
        >
          <label htmlFor="text">Mensaje:</label>
          <textarea
            style={{ margin: "5px", padding: "4px" }}
            id="text"
            value={text}
            onChange={handleTextChange}
            rows={10}
            cols={70}
            placeholder=" Escribe aquí..."
          />
        </div>
        <button type="submit" onClick={toggleIsNotEmpty}>
          Enviar
        </button>
      </form>
      <Link to="/" style={{ textAlign: "center", marginTop: "15px" }}>
        Volver al inicio
      </Link>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        {isNotEmpty ? "Mensaje enviado con éxito" : ""}
      </div>
    </div>
  );
}

export default Contact;
