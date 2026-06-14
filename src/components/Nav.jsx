import css from '../lib/css';

const links = [
  { href: '#producto', label: 'Producto' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#stock', label: 'Stock' },
  { href: '#beneficios', label: 'Beneficios' },
  { href: '#contacto', label: 'Contacto' },
];

const navLink = css(
  'font-family:var(--font-body);font-size:14.5px;font-weight:500;color:#475569;text-decoration:none;transition:color .2s',
);

export default function Nav() {
  return (
    <nav
      data-nav
      style={css(
        'position:sticky;top:0;z-index:50;display:flex;align-items:center;justify-content:space-between;height:70px;padding:0 40px;background:rgba(244,247,251,.72);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border-bottom:1px solid transparent;transition:box-shadow .3s ease,background .3s ease,border-color .3s ease',
      )}
    >
      <a href="#top" style={css('display:flex;align-items:center;text-decoration:none')}>
        <img src="assets/sockflow.svg" alt="SockFlow" style={css('height:30px')} />
      </a>

      <div style={css('display:flex;align-items:center;gap:36px')}>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            style={navLink}
            onMouseOver={(e) => { e.currentTarget.style.color = '#2563EB'; }}
            onMouseOut={(e) => { e.currentTarget.style.color = '#475569'; }}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a
        href="#contacto"
        data-cta
        style={css(
          'position:relative;display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:14.5px;letter-spacing:-.01em;color:#fff;background:#1E3A8A;padding:11px 24px;border-radius:9999px;text-decoration:none;box-shadow:0 4px 20px rgba(30,58,138,.35);transition:transform .2s cubic-bezier(.4,0,.2,1),box-shadow .25s',
        )}
        onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(30,58,138,.5)'; }}
        onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 20px rgba(30,58,138,.35)'; }}
      >
        Comenzar ahora
      </a>
    </nav>
  );
}
