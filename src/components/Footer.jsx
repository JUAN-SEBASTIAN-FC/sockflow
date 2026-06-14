import css from '../lib/css';

const brandStyle = css('font-family:var(--font-display);font-weight:800;font-size:21px;color:#94A3B8;letter-spacing:-.02em;transition:color .25s');
const footerLink = css('color:#64748B;text-decoration:none;transition:color .2s');

const integrations = ['Shopify', 'WooCommerce', 'Mercado Libre', 'VTEX', 'Dafiti'];
const legalLinks = ['Privacidad', 'Términos', 'Contacto'];

export default function Footer() {
  return (
    <footer id="contacto" style={css('padding:0 40px 56px')}>
      <div style={css('max-width:1240px;margin:0 auto')}>
        <p data-reveal style={css('text-align:center;font-family:var(--font-body);font-size:14px;font-weight:500;color:#94A3B8;letter-spacing:.02em;margin:0 0 26px;opacity:0;transform:translateY(16px);transition:opacity .7s ease,transform .7s ease')}>Integraciones nativas con las mejores plataformas</p>
        <div data-reveal style={css('display:flex;align-items:center;justify-content:center;flex-wrap:wrap;gap:46px;opacity:0;transform:translateY(16px);transition:opacity .7s ease .1s,transform .7s ease .1s')}>
          {integrations.map((name) => (
            <span
              key={name}
              style={brandStyle}
              onMouseOver={(e) => { e.currentTarget.style.color = '#2563EB'; }}
              onMouseOut={(e) => { e.currentTarget.style.color = '#94A3B8'; }}
            >
              {name}
            </span>
          ))}
        </div>
        <div style={css('display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:18px;margin-top:48px;padding-top:30px;border-top:1px solid #DCE9F7')}>
          <img src="assets/sockflow.svg" alt="SockFlow" style={css('height:28px')} />
          <span style={css('font-family:var(--font-body);font-size:13px;color:#94A3B8')}>© 2026 SockFlow · Control total de tu inventario de medias</span>
          <div style={css('display:flex;gap:22px;font-family:var(--font-body);font-size:13.5px;font-weight:500')}>
            {legalLinks.map((label) => (
              <a
                key={label}
                href="#"
                style={footerLink}
                onMouseOver={(e) => { e.currentTarget.style.color = '#2563EB'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = '#64748B'; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
