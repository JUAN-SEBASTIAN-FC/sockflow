import './StockDashboard.css';

const kpis = [
  { label: 'Stock total', count: '12458', delta: '↑ 12.8%' },
  { label: 'Órdenes', count: '3467', delta: '↑ 18.2%' },
  { label: 'Productos activos', count: '1245', delta: '↑ 10.4%' },
  { label: 'Clientes', count: '2890', delta: '↑ 8.3%' },
];

const rings = [
  { pct: '60', color: '#2563EB', label: 'Deportiva' },
  { pct: '22', color: '#7C5BE6', label: 'Casual' },
  { pct: '12', color: '#60A5FA', label: 'Ejecutiva' },
  { pct: '6', color: '#A5A3F5', label: 'Térmica' },
];

const levels = [
  { name: 'Pro Runner 2.0', units: '1,240 uds.', unitColor: '#64748B', unitWeight: 400, fill: '88%', bar: 'linear-gradient(90deg,#2563EB,#60A5FA)', delay: '0s' },
  { name: 'Daily Soft', units: '1,820 uds.', unitColor: '#64748B', unitWeight: 400, fill: '96%', bar: 'linear-gradient(90deg,#2563EB,#60A5FA)', delay: '0.1s' },
  { name: 'Merino Boss', units: '38 uds. · pocas', unitColor: '#B45309', unitWeight: 600, fill: '14%', bar: 'linear-gradient(90deg,#F59E0B,#FBBF24)', delay: '0.2s' },
  { name: 'Thermo Peak', units: '0 uds. · agotado', unitColor: '#DC2626', unitWeight: 600, fill: '4%', bar: 'linear-gradient(90deg,#EF4444,#F87171)', delay: '0.3s' },
];

export default function StockDashboard() {
  return (
    <section id="stock" className="stock">
      <div className="stock__inner">
        <div className="stock__head" data-reveal>
          <span className="stock__eyebrow">Gestión de stock</span>
          <h2 className="stock__title">Tu inventario, bajo control</h2>
          <p className="stock__lead">Un panel sofisticado, no técnico. Niveles, disponibilidad y tendencias, siempre actualizados.</p>
        </div>

        <div className="stock__panel" data-reveal>
          <div className="stock__kpis">
            {kpis.map((k) => (
              <div key={k.label} className="kpi">
                <div className="kpi__label">{k.label}</div>
                <div className="kpi__value"><span data-count={k.count} data-sep="1">0</span></div>
                <span className="kpi__delta">{k.delta}</span>
              </div>
            ))}
          </div>

          <div className="stock__body">
            {/* Distribución por categoría */}
            <div className="stock__card">
              <h3 className="stock__card-title">Distribución por categoría</h3>
              <div className="dist__grid">
                {rings.map((r) => (
                  <div key={r.label} className="dist__item">
                    <svg width="78" height="78" viewBox="0 0 78 78"><circle cx="39" cy="39" r="31" fill="none" stroke="#EEF2FB" strokeWidth="9" /><circle className="dist__ring" data-ring data-circ="194.8" data-pct={r.pct} cx="39" cy="39" r="31" fill="none" stroke={r.color} strokeWidth="9" strokeLinecap="round" strokeDasharray="194.8" strokeDashoffset="194.8" transform="rotate(-90 39 39)" /></svg>
                    <div>
                      <div className="dist__pct"><span data-count={r.pct} data-suffix="%">0%</span></div>
                      <div className="dist__name">{r.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Niveles de stock */}
            <div className="stock__card">
              <div className="levels__head">
                <h3 className="stock__card-title" style={{ margin: 0 }}>Niveles de stock</h3>
                <div className="levels__legend">
                  <span className="levels__legend-item"><span className="levels__legend-dot" style={{ background: '#10B981' }} />Disponible</span>
                  <span className="levels__legend-item"><span className="levels__legend-dot" style={{ background: '#F59E0B' }} />Pocas</span>
                  <span className="levels__legend-item"><span className="levels__legend-dot" style={{ background: '#EF4444' }} />Agotado</span>
                </div>
              </div>
              <div className="levels__list">
                {levels.map((l) => (
                  <div key={l.name}>
                    <div className="levels__row-head">
                      <span className="levels__row-name">{l.name}</span>
                      <span style={{ color: l.unitColor, fontWeight: l.unitWeight }}>{l.units}</span>
                    </div>
                    <div className="levels__track">
                      <div className="levels__fill" data-bar data-fill={l.fill} style={{ background: l.bar, transitionDelay: l.delay }} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini gráfico de ventas */}
              <div className="chart">
                <div className="chart__head">
                  <span className="chart__title">Ventas · últimos 6 meses</span>
                  <span className="chart__pill">+23.4%</span>
                </div>
                <svg className="chart__svg" viewBox="0 0 520 110" preserveAspectRatio="none">
                  <path className="chart__line" data-line d="M6 86 C70 70 90 58 150 60 C210 62 230 34 290 38 C350 42 372 22 430 18 C470 15 494 12 514 8" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeDasharray="900" strokeDashoffset="900" />
                  <path d="M6 86 C70 70 90 58 150 60 C210 62 230 34 290 38 C350 42 372 22 430 18 C470 15 494 12 514 8 L514 108 L6 108 Z" fill="url(#linefill)" opacity=".14" />
                  <defs><linearGradient id="linefill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2563EB" /><stop offset="1" stopColor="#2563EB" stopOpacity="0" /></linearGradient></defs>
                </svg>
                <div className="chart__labels"><span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
