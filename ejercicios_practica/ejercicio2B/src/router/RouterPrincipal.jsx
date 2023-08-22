import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    NavLink,
} from "react-router-dom";

import Home from "../views/Home"
import Error404 from "../views/Error404"
import RouterSubRutas from "../router/RouterSubRutas";
import Componente2 from "../views/Componente2";
import Componente1 from "../views/Componente1";
import Navbar from "../components/Navbar/Navbar"
import InicioSubRuta from "../views/subrutas/InicioSubRuta";
import SubRuta1 from "../views/subrutas/SubRuta1";
import Persona from "../components/Persona"
import PersonaData from "../components/PersonaData"


const RouterPrincipal=()=>{
    return(
      <>
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Home />} />
            <Route path="/componente1" element={<Componente1 />} />
            <Route path="/componente2" element={<Componente2 />} />
            {/* <Route path="/subrutas" element={<RouterSubRutas />} /> */}
            <Route path="/subrutas" element={<InicioSubRuta />} />
            <Route path="/navegar" element={<Navigate to="/persona/TuNombre/TuApellido" />} />
            <Route path="/persona" element={<PersonaData />} />
            <Route path="/persona/:nombre/:apellido" element={<PersonaData />} />
            <Route path="/*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </>
    )
  }
  
  export default RouterPrincipal;