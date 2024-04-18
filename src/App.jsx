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
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
