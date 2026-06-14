import './Footer.css';

const integrations = ['Shopify', 'WooCommerce', 'Mercado Libre', 'VTEX', 'Dafiti'];
const legalLinks = ['Privacidad', 'Términos', 'Contacto'];

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer__inner">
        <p className="footer__integrations-label" data-reveal>Integraciones nativas con las mejores plataformas</p>
        <div className="footer__integrations" data-reveal>
          {integrations.map((name) => (
            <span key={name} className="footer__brand-name">{name}</span>
          ))}
        </div>
        <div className="footer__bottom">
          <img className="footer__logo" src="assets/sockflow.svg" alt="SockFlow" />
          <span className="footer__copy">© 2026 SockFlow · Control total de tu inventario de medias</span>
          <div className="footer__legal">
            {legalLinks.map((label) => (
              <a key={label} href="#">{label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
