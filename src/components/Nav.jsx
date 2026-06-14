import './Nav.css';

const links = [
  { href: '#producto', label: 'Producto' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#stock', label: 'Stock' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav() {
  return (
    <nav className="nav" data-nav>
      <a href="#top" className="nav__brand">
        <img src="assets/sockflow.svg" alt="SockFlow" />
      </a>

      <div className="nav__links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav__link">
            {l.label}
          </a>
        ))}
      </div>

      <a href="#contacto" className="nav__cta" data-cta>
        Comenzar ahora
      </a>
    </nav>
  );
}
