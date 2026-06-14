import './Nav.css';

const links = [
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#stock', label: 'Disponibilidad' },
  { href: '#beneficios', label: 'Domicilios' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Nav() {
  return (
    <nav className="nav" data-nav>
      <a href="#top" className="nav__brand">Medias Tuluá</a>

      <div className="nav__links">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="nav__link">
            {l.label}
          </a>
        ))}
      </div>

      <a href="#contacto" className="nav__cta" data-cta>
        Pedir ahora
      </a>
    </nav>
  );
}
