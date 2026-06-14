import './Features.css';

const features = [
  { delay: '0', grad: 'linear-gradient(135deg,#2563EB,#7C5BE6)', shadow: '0 8px 20px rgba(37,99,235,.4)', title: 'Domicilio gratis', desc: 'Te llevamos tu pedido sin costo en toda la ciudad de Tuluá.', icon: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></> },
  { delay: '90', grad: 'linear-gradient(135deg,#2563EB,#60A5FA)', shadow: '0 8px 20px rgba(37,99,235,.4)', title: 'Gran variedad', desc: 'Medias deportivas, casuales, ejecutivas y térmicas.', icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12l2 2 4-4" /></> },
  { delay: '180', grad: 'linear-gradient(135deg,#7C5BE6,#60A5FA)', shadow: '0 8px 20px rgba(124,91,230,.4)', title: 'Calidad premium', desc: 'Materiales suaves y resistentes que duran más.', icon: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></> },
  { delay: '270', grad: 'linear-gradient(135deg,#1E3A8A,#2563EB)', shadow: '0 8px 20px rgba(30,58,138,.45)', title: 'Pedido fácil', desc: 'Escríbenos por WhatsApp o Instagram y listo.', icon: <><path d="M3 17l5-5 4 4 7-8" /><path d="M16 4h5v5" /></> },
];

export default function Features() {
  return (
    <section id="producto" className="features">
      <div className="features__panel" data-reveal>
        <div className="features__glow features__glow--a" />
        <div className="features__glow features__glow--b" />

        <div className="features__content">
          <div className="features__head">
            <div>
              <span className="features__eyebrow">Por qué Medias Tuluá</span>
              <h2 className="features__title">Todo lo que buscas<br />en un solo lugar</h2>
            </div>
            <span className="features__live"><span className="features__live-dot" />Atención inmediata</span>
          </div>

          <div className="features__grid">
            {features.map((f) => (
              <div key={f.title} className="feature-card" data-reveal data-delay={f.delay}>
                <span className="feature-card__icon" style={{ background: f.grad, boxShadow: f.shadow }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                </span>
                <h3 className="feature-card__title">{f.title}</h3>
                <p className="feature-card__desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
