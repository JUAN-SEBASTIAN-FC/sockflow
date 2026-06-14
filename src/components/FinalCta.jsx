import './FinalCta.css';

export default function FinalCta() {
  return (
    <section id="beneficios" className="cta">
      <div className="cta__panel" data-reveal>
        <div className="cta__glow cta__glow--a" data-depth="30" />
        <div className="cta__glow cta__glow--b" data-depth="-26" />
        <div className="cta__spark" />

        <div className="cta__content">
          <h2 className="cta__title">Empieza hoy. Crece mañana.</h2>
          <p className="cta__lead">Únete a cientos de negocios de moda que ya optimizan su inventario de medias con SockFlow.</p>
          <div className="cta__actions">
            <a href="#contacto" className="cta__primary">
              <span className="cta__primary-shimmer" />
              <span className="cta__primary-label">Comenzar gratis</span>
            </a>
            <a href="#catalogo" className="cta__demo">Ver demo<span>→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
