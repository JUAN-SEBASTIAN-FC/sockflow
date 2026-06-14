import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

// Sistema de diseño SockFlow (tokens + reset) y estilos/animaciones globales.
import './styles/index.css';
import './styles/globals.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
