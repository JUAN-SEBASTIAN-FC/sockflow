# SockFlow

Landing page de **SockFlow** — *Control total de tu inventario de medias*.
Construida con **Vite** + **React**.

## Requisitos

- Node.js 18 o superior

## Puesta en marcha

```bash
npm install      # instala las dependencias
npm run dev      # arranca el servidor de desarrollo
```

Otros comandos:

```bash
npm run build    # genera la versión de producción en dist/
npm run preview  # sirve localmente el build de producción
```

## Variables de entorno

Copia `.env.example` a `.env` y ajusta los valores. En Vite solo se exponen
al cliente las variables con prefijo `VITE_`.

## Estructura

```
public/assets/        Imágenes (media, logo)
src/
  components/         Cada sección con su .jsx + .css (Nav, Hero, Catalog, ...)
  data/products.js    Catálogo de productos
  hooks/              useLandingEffects — interactividad (parallax, contadores, filtros...)
  styles/             Sistema de diseño (tokens) + estilos globales/animaciones
  App.jsx / App.css   Composición de la página
  main.jsx            Punto de entrada de React
```

Cada componente tiene su propio archivo `.css` con clases (sin estilos en
línea de maquetación). El sistema de diseño (tokens de color, tipografía,
espaciado, sombras y bordes) vive en `src/styles/` y se importa desde
`src/styles/index.css`. Las animaciones globales (`@keyframes`) están en
`src/styles/globals.css`.
