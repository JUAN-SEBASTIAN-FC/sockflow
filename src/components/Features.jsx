import './Features.css';

const features = [
  { delay: '0', grad: 'linear-gradient(135deg,#2563EB,#7C5BE6)', shadow: '0 8px 20px rgba(37,99,235,.4)', title: 'Edición masiva', desc: 'Actualiza precios, tallas, colores y más en segundos.', icon: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></> },
  { delay: '90', grad: 'linear-gradient(135deg,#2563EB,#60A5FA)', shadow: '0 8px 20px rgba(37,99,235,.4)', title: 'Control de stock', desc: 'Visualiza tu inventario en tiempo real, sin sorpresas.', icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12l2 2 4-4" /></> },
  { delay: '180', grad: 'linear-gradient(135deg,#7C5BE6,#60A5FA)', shadow: '0 8px 20px rgba(124,91,230,.4)', title: 'Alertas inteligentes', desc: 'Recibe avisos de bajo stock y reposición a tiempo.', icon: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></> },
  { delay: '270', grad: 'linear-gradient(135deg,#1E3A8A,#2563EB)', shadow: '0 8px 20px rgba(30,58,138,.45)', title: 'Reportes avanzados', desc: 'Toma decisiones con datos claros y precisos.', icon: <><path d="M3 17l5-5 4 4 7-8" /><path d="M16 4h5v5" /></> },
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
              <span className="features__eyebrow">Plataforma todo-en-uno</span>
              <h2 className="features__title">Todo lo que necesitas<br />para escalar tu negocio</h2>
            </div>
            <span className="features__live"><span className="features__live-dot" />Sincronización en vivo</span>
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
