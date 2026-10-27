# Supermercado - Gestión de inventario

Sitio web de gestión de inventario para un supermercado, desarrollado con
React, Vite y React Router.

## Páginas

| Ruta | Descripción |
| --- | --- |
| `/` | Inicio: inventario de productos (búsqueda y ajuste de stock) |
| `/quienes-somos` | Información del supermercado |
| `/contactanos` | Datos de contacto |
| `*` | Mensaje de página no encontrada |

La navegación se hace desde un menú inferior usando `Link` de React Router
(sin recargar la página). La página "Contáctanos" incluye un botón que usa
`useNavigate` para volver al inicio.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Luego abre la dirección que muestra la terminal (normalmente
http://localhost:5173).

## Estructura

```
src/
  components/
    MenuInferior.jsx
  pages/
    Home.jsx
    QuienesSomos.jsx
    Contactanos.jsx
  App.jsx
  App.css
  index.css
  main.jsx
```
