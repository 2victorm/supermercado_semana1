import { useNavigate } from "react-router-dom";

function Contactanos() {
  const navigate = useNavigate();

  return (
    <section>
      <h2>Contáctanos</h2>
      <p>Si tienes dudas o comentarios, puedes comunicarte con nosotros:</p>

      <ul>
        <li><strong>Teléfono:</strong> +56 2 2345 6789</li>
        <li><strong>Correo:</strong> contacto@supermercado.cl</li>
        <li><strong>Dirección:</strong> Av. Principal 1234, Santiago</li>
        <li><strong>Horario:</strong> Lunes a domingo, de 8:00 a 22:00 hrs</li>
      </ul>

      {/* Ejemplo de navegación con el hook useNavigate */}
      <button className="boton" onClick={() => navigate("/")}>
        Volver al inicio
      </button>
    </section>
  );
}

export default Contactanos;
