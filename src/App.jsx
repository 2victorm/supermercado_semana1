import { Routes, Route } from "react-router-dom";
import MenuInferior from "./components/MenuInferior";
import Home from "./pages/Home";
import QuienesSomos from "./pages/QuienesSomos";
import Contactanos from "./pages/Contactanos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Supermercado <span className="marca-acento">Segundo</span>
        </h1>
        <p>Gestión de inventario</p>
      </header>

      <MenuInferior />

      <main className="contenido">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contactanos" element={<Contactanos />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
