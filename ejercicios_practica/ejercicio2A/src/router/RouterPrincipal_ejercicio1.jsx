import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

// Aquí importamos todas las vistas/páginas que utilizará el router
import Home from "../views/Home"
import Error404 from "../views/Error404"
import Contact from "../views/Contact"

const RouterPrincipal=(props)=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default RouterPrincipal;

