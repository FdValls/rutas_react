import React from "react";
import InicioSubRuta from "../views/subrutas/InicioSubRuta";
import SubRuta1 from "../views/subrutas/SubRuta1";
import SubRuta2 from "../views/subrutas/SubRuta2";
import Navbar from "../components/Navbar/Navbar";
import Error404 from "../views/Error404";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  NavLink,
} from "react-router-dom";

function Subrutas() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/inicioSubRuta" element={<InicioSubRuta />} />
          <Route path="/subRuta1" element={<SubRuta1 />} />
          <Route path="/subRuta2" element={<SubRuta2 />} />
          <Route path="/*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Subrutas;
