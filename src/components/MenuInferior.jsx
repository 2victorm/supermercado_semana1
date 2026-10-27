import { Link, useLocation } from "react-router-dom";

// Menú inferior de navegación (usa Link de React Router: no recarga la página)
function MenuInferior() {
  const location = useLocation();

  const enlaces = [
    { ruta: "/", texto: "Inicio" },
    { ruta: "/quienes-somos", texto: "Quiénes somos" },
    { ruta: "/contactanos", texto: "Contáctanos" },
  ];

  return (
    <nav className="menu-inferior">
      {enlaces.map((enlace) => (
        <Link
          key={enlace.ruta}
          to={enlace.ruta}
          className={location.pathname === enlace.ruta ? "activo" : ""}
        >
          {enlace.texto}
        </Link>
      ))}
    </nav>
  );
}

export default MenuInferior;
