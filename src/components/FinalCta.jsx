import './FinalCta.css';

export default function FinalCta() {
  return (
    <section id="beneficios" className="cta">
      <div className="cta__panel" data-reveal>
        <div className="cta__glow cta__glow--a" data-depth="30" />
        <div className="cta__glow cta__glow--b" data-depth="-26" />
        <div className="cta__spark" />

        <div className="cta__content">
          <h2 className="cta__title">Haz tu pedido hoy.</h2>
          <p className="cta__lead">Escríbenos por WhatsApp o Instagram y recibe tus medias con domicilio gratis en Tuluá.</p>
          <div className="cta__actions">
            <a href="https://wa.me/573169050616" className="cta__primary">
              <span className="cta__primary-shimmer" />
              <span className="cta__primary-label">Pedir por WhatsApp</span>
            </a>
            <a href="#catalogo" className="cta__demo">Ver catálogo<span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
