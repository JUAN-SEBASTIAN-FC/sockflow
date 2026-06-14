import { useState, useEffect } from 'react';
import './Nav.css';

const links = [
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#stock',    label: 'Disponibilidad' },
  { href: '#beneficios', label: 'Domicilios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav({ onLoginOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquear scroll del body cuando el drawer está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="nav" data-nav>
      <a href="#top" className="nav__brand" onClick={closeMenu}>Medias Tuluá</a>

      {/* Links desktop */}
      <div className="nav__links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
        ))}
      </div>

      {/* Acciones desktop */}
      <div className="nav__actions">
        <button className="nav__login" onClick={onLoginOpen}>Iniciar sesión</button>
        <a href="#contacto" className="nav__cta" data-cta>Pedir ahora</a>
      </div>

      {/* Botón hamburguesa */}
      <button
        className={`nav__hamburger${menuOpen ? ' is-open' : ''}`}
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        <span />
        <span />
        <span />
      </button>

      {/* Drawer móvil */}
      <div className={`nav__drawer${menuOpen ? ' is-open' : ''}`} aria-hidden={!menuOpen}>
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav__drawer-link" onClick={closeMenu}>
            {l.label}
          </a>
        ))}
        <div className="nav__drawer-actions">
          <button className="nav__drawer-login" onClick={() => { closeMenu(); onLoginOpen?.(); }}>
            Iniciar sesión
          </button>
          <a href="#contacto" className="nav__drawer-cta" onClick={closeMenu}>
            Pedir ahora
          </a>
        </div>
      </div>
    </nav>
  );
}
