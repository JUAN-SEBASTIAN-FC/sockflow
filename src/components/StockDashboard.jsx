import './StockDashboard.css';

export default function StockDashboard() {
  return (
    <section id="stock" className="stock">
      <div className="stock__inner">
        <div className="stock__head" data-reveal>
          <span className="stock__eyebrow">Disponibilidad</span>
          <h2 className="stock__title">Siempre listos para ti</h2>
          <p className="stock__lead">Consulta disponibilidad y haz tu pedido por WhatsApp o Instagram.</p>
        </div>

        <div className="stock__panel" data-reveal>
          <div className="stock__body">
            <div className="stock__card">
              <h3 className="stock__card-title">Distribución por categoría</h3>
              <div className="dist__grid">
                {[
                  { pct: 60, color: '#2563EB', label: 'Deportiva' },
                  { pct: 22, color: '#7C5BE6', label: 'Casual' },
                  { pct: 12, color: '#60A5FA', label: 'Ejecutiva' },
                  { pct: 6,  color: '#A5A3F5', label: 'Otra' },
                ].map((r) => (
                  <div key={r.label} className="dist__item">
                    <svg width="78" height="78" viewBox="0 0 78 78">
                      <circle cx="39" cy="39" r="31" fill="none" stroke="#EEF2FB" strokeWidth="9" />
                      <circle
                        className="dist__ring"
                        data-ring
                        data-circ="194.8"
                        data-pct={r.pct}
                        cx="39" cy="39" r="31"
                        fill="none" stroke={r.color} strokeWidth="9"
                        strokeLinecap="round"
                        strokeDasharray="194.8" strokeDashoffset="194.8"
                        transform="rotate(-90 39 39)"
                      />
                    </svg>
                    <div>
                      <div className="dist__pct">
                        <span data-count={r.pct} data-suffix="%">0%</span>
                      </div>
                      <div className="dist__name">{r.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="stock__card stock__card--cta">
              <h3 className="stock__card-title">¿Quieres saber si hay stock?</h3>
              <p className="stock__cta-text">Escríbenos por WhatsApp o Instagram y te confirmamos disponibilidad al instante.</p>
              <div className="stock__cta-btns">
                <a href="#contacto" className="stock__cta-btn stock__cta-btn--primary">Consultar por WhatsApp</a>
                <a href="#contacto" className="stock__cta-btn stock__cta-btn--secondary">Ver en Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
