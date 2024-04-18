import { Home, Detail } from "./views"
import { Header, Footer } from "./components/static"

import { BrowserRouter, Routes, Route, Form } from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:idDog" element={<Detail />} />
        {/* 1. Empieza el recorrido de la ruta: idDog es el nombre de la propiedad que se va guardar en el objeto useParams. Sigue en Card */}
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
