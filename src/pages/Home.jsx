import { useState } from "react";

// Datos de ejemplo del inventario
const productosIniciales = [
  { id: 1, nombre: "Arroz grado 1 (1 kg)", categoria: "Despensa", stock: 45, precio: 1490 },
  { id: 2, nombre: "Fideos espagueti (400 g)", categoria: "Despensa", stock: 60, precio: 990 },
  { id: 3, nombre: "Leche entera (1 L)", categoria: "Lácteos", stock: 8, precio: 1190 },
  { id: 4, nombre: "Yoghurt natural (150 g)", categoria: "Lácteos", stock: 25, precio: 450 },
  { id: 5, nombre: "Manzana roja (kg)", categoria: "Frutas y verduras", stock: 30, precio: 1890 },
  { id: 6, nombre: "Tomate (kg)", categoria: "Frutas y verduras", stock: 5, precio: 1990 },
  { id: 7, nombre: "Pan de molde", categoria: "Panadería", stock: 18, precio: 1790 },
  { id: 8, nombre: "Aceite vegetal (900 ml)", categoria: "Despensa", stock: 12, precio: 2490 },
];

const STOCK_BAJO = 10;

function Home() {
  const [productos, setProductos] = useState(productosIniciales);
  const [busqueda, setBusqueda] = useState("");

  const cambiarStock = (id, cantidad) => {
    setProductos(
      productos.map((producto) =>
        producto.id === id
          ? { ...producto, stock: Math.max(0, producto.stock + cantidad) }
          : producto
      )
    );
  };

  const productosFiltrados = productos.filter((producto) =>
    producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const totalUnidades = productos.reduce((suma, p) => suma + p.stock, 0);
  const productosStockBajo = productos.filter((p) => p.stock < STOCK_BAJO).length;

  return (
    <section>
      <h2>Gestión de inventario</h2>
      <p>Revisa y actualiza el stock de los productos del supermercado.</p>

      <div className="banners">
        <div className="banner banner-azul">
          <strong>INVENTARIO</strong> al día en {productos.length} productos
        </div>
        <div className="banner banner-amarillo">
          <strong>REPONER</strong> {productosStockBajo} productos con stock bajo
        </div>
      </div>

      <div className="resumen">
        <div className="tarjeta">
          <span className="numero">{productos.length}</span>
          <span>Productos</span>
        </div>
        <div className="tarjeta">
          <span className="numero">{totalUnidades}</span>
          <span>Unidades en stock</span>
        </div>
        <div className="tarjeta">
          <span className="numero">{productosStockBajo}</span>
          <span>Con stock bajo</span>
        </div>
      </div>

      <div className="buscador-caja">
        <input
          type="text"
          className="buscador"
          placeholder="Buscar producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <span className="buscador-icono">🔍</span>
      </div>

      <table className="tabla">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productosFiltrados.map((producto) => (
            <tr key={producto.id}>
              <td>{producto.nombre}</td>
              <td>{producto.categoria}</td>
              <td>${producto.precio.toLocaleString("es-CL")}</td>
              <td className={producto.stock < STOCK_BAJO ? "stock-bajo" : ""}>
                {producto.stock}
              </td>
              <td>
                <button onClick={() => cambiarStock(producto.id, -1)}>-</button>
                <button onClick={() => cambiarStock(producto.id, 1)}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {productosFiltrados.length === 0 && (
        <p className="mensaje">No se encontraron productos.</p>
      )}
    </section>
  );
}

export default Home;
