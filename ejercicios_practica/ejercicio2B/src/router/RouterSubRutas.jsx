import React from "react";
import { useParams, NavLink, Outlet } from "react-router-dom";
import styles from "./myClass.css"

function RouterSubRutas() {
  return (
    <>
      <div className={styles.div}>
        <div>
          <NavLink to="/subrutas">Inicio</NavLink>
        </div>
        <div>
          <NavLink to="/subrutas/subRuta1">SubRuta1</NavLink>
        </div>
        <div>
          <NavLink to={`/subrutas/subruta2`}>SubRuta2</NavLink>
        </div>
      </div>

      <Outlet />
    </>
  );
}

export default RouterSubRutas;
