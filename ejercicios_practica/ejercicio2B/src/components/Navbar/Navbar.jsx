import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "25px",
        }}
      >
        <div>
          <Link to="/" style={{ color: "#E5E3DE" }}>
           Inicio
          </Link>
        </div>
        <div>
        <Link to="/componente1" style={{ color: "#E5E3DE" }}>
            Componente 1
          </Link>
        </div>
        <div>
        <Link to="/componente2" style={{ color: "#E5E3DE" }}>
            Componente 2
          </Link>
        </div>
        <div>
        <Link to="/subrutas" style={{ color: "#E5E3DE" }}>
            Subrutas
          </Link>
        </div>
        <div>
        <Link to="/persona" style={{ color: "#E5E3DE" }}>
            Persona
          </Link>
        </div>
      </section>
      {/* <h1>Soy el componente Home desde la carpeta vista</h1> */}
    </div>
  );
};

export default Navbar;
