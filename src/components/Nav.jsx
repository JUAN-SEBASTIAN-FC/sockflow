import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Nav.css';

const links = [
  { href: '#catalogo',   label: 'Catálogo' },
  { href: '#stock',      label: 'Disponibilidad' },
  { href: '#beneficios', label: 'Domicilios' },
  { href: '#contacto',   label: 'Contacto' },
];

function Drawer({ open, onClose, onLoginOpen }) {
  // Bloquear scroll del body cuando está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Cerrar con Escape
  useEffect(() => {
    if (!open) return;
    const fn = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, [open, onClose]);

  return createPortal(
    <div className={`nav-drawer-overlay${open ? ' is-open' : ''}`} aria-hidden={!open}>
      {/* Fondo: click cierra */}
      <div className="nav-drawer-backdrop" onClick={onClose} />

      {/* Panel lateral */}
      <div className="nav-drawer-panel" role="dialog" aria-modal="true" aria-label="Menú de navegación">
        <div className="nav-drawer-head">
          <span className="nav-drawer-brand">Medias Tuluá</span>
          <button className="nav-drawer-close" onClick={onClose} aria-label="Cerrar menú">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="nav-drawer-links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-drawer-link" onClick={onClose}>
              {l.label}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          ))}
        </nav>

        <div className="nav-drawer-footer">
          <button className="nav-drawer-login" onClick={() => { onClose(); onLoginOpen?.(); }}>
            Iniciar sesión
          </button>
          <a href="#contacto" className="nav-drawer-cta" onClick={onClose}>
            Pedir ahora
          </a>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function Nav({ onLoginOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav" data-nav>
        <a href="#top" className="nav__brand">Medias Tuluá</a>

        <div className="nav__links">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">{l.label}</a>
          ))}
        </div>

        <div className="nav__actions">
          <button className="nav__login" onClick={onLoginOpen}>Iniciar sesión</button>
          <a href="#contacto" className="nav__cta" data-cta>Pedir ahora</a>
        </div>

        <button
          className={`nav__hamburger${menuOpen ? ' is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onLoginOpen={onLoginOpen}
      />
    </>
  );
}
