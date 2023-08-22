import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div>
      <h1>
        <p> 🚧 404 Página no encontrada 🙁 </p>
      </h1>
      <Link style={{color: "yellow"}} to="/">Ir al inicio</Link>
    </div>
  );
};

export default NotFound;
