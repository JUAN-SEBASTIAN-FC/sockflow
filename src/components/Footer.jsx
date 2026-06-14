import './Footer.css';

export default function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="footer__inner">
        <p className="footer__integrations-label" data-reveal>Contáctanos y haz tu pedido</p>
        <div className="footer__integrations" data-reveal>
          <a className="footer__brand-name" href="https://wa.me/573169050616">WhatsApp 3169050616</a>
          <a className="footer__brand-name" href="https://instagram.com/medias_tulua">Instagram @Medias_tulua</a>
        </div>
        <div className="footer__bottom">
          <span className="footer__logo-text">Medias Tuluá</span>
          <span className="footer__copy">© 2026 Medias Tuluá · Domicilio gratis en la ciudad de Tuluá</span>
        </div>
      </div>
    </footer>
  );
}
