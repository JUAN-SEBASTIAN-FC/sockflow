import './Hero.css';

const chips = [
  { label: 'Inventario en tiempo real', icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
  { label: 'Edición masiva', icon: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></> },
  { label: 'Reportes inteligentes', icon: <><path d="M3 17l5-5 4 4 7-8" /><path d="M16 4h5v5" /></> },
  { label: 'Multi-almacén', icon: <><path d="M3 9h18M3 15h18M9 3v18" /><rect x="3" y="3" width="18" height="18" rx="2" /></> },
];

const salesBars = [
  { fill: '38%', bg: 'linear-gradient(#60A5FA,#2563EB)', delay: '0.1s' },
  { fill: '58%', bg: 'linear-gradient(#60A5FA,#2563EB)', delay: '0.2s' },
  { fill: '46%', bg: 'linear-gradient(#7C5BE6,#2563EB)', delay: '0.3s' },
  { fill: '78%', bg: 'linear-gradient(#7C5BE6,#2563EB)', delay: '0.4s' },
  { fill: '64%', bg: 'linear-gradient(#A5A3F5,#60A5FA)', delay: '0.5s' },
  { fill: '92%', bg: 'linear-gradient(#A5A3F5,#60A5FA)', delay: '0.6s' },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__bg" />

      <div className="hero__blob hero__blob--a" data-depth="26"><div /></div>
      <div className="hero__blob hero__blob--b" data-depth="-34"><div /></div>
      <div className="hero__blob hero__blob--c" data-depth="18"><div /></div>
      <div className="hero__ring" data-depth="-12" />

      <div className="hero__inner">
        {/* Columna de texto */}
        <div className="hero__copy" data-reveal>
          <span className="hero__badge">
            <span className="hero__badge-dot" />Inventario inteligente · 2026
          </span>
          <h1 className="hero__title">
            Control total<br />de tu inventario<br />de <span className="hero__title-accent">medias</span>
          </h1>
          <p className="hero__lead">Gestiona, edita y controla tu stock en tiempo real. Menos desorden, más ventas.</p>

          <div className="hero__actions">
            <a href="#catalogo" className="hero__cta" data-glowcta>
              <span className="hero__cta-shimmer" />
              <span className="hero__cta-label">Comenzar gratis</span>
            </a>
            <a href="#stock" className="hero__demo">Ver demo<span>→</span></a>
          </div>

          <div className="hero__chips">
            {chips.map((c) => (
              <span key={c.label} className="hero__chip">
                <span className="hero__chip-icon">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{c.icon}</svg>
                </span>
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* Columna visual */}
        <div className="hero__visual">
          <div className="hero__halo-rings" data-depth="10"><div /></div>

          <div className="hero__sock" data-depth="-16" data-sockwrap>
            <div>
              <img src="assets/sock.png" alt="Media deportiva premium SockFlow" />
            </div>
          </div>

          <div className="hero__orb hero__orb--a" data-depth="40"><div /></div>
          <div className="hero__orb hero__orb--b" data-depth="-30"><div /></div>
          <div className="hero__orb hero__orb--c" data-depth="24"><div /></div>

          {/* Tarjeta: Stock total */}
          <div className="hero__stat hero__stat--total" data-depth="-20" data-reveal data-delay="180">
            <div className="hero__stat-card">
              <div className="hero__stat-label">Stock total</div>
              <div className="hero__stat-value-row"><span className="hero__stat-value" data-count="12458" data-sep="1">0</span></div>
              <div className="hero__stat-trend"><span className="hero__pill-up">↑ 12.8%</span><span className="hero__stat-muted">vs ayer</span></div>
              <svg className="hero__spark" width="138" height="34" viewBox="0 0 138 34"><path d="M2 26 C18 20 26 28 40 18 C54 9 64 22 78 14 C92 7 104 16 118 8 L136 4" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" /><path d="M2 26 C18 20 26 28 40 18 C54 9 64 22 78 14 C92 7 104 16 118 8 L136 4 L136 34 L2 34 Z" fill="url(#sparkfill)" opacity=".18" /><defs><linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2563EB" /><stop offset="1" stopColor="#2563EB" stopOpacity="0" /></linearGradient></defs></svg>
            </div>
          </div>

          {/* Tarjeta: Categorías (donut) */}
          <div className="hero__stat hero__stat--cats" data-depth="22" data-reveal data-delay="320">
            <div className="hero__stat-card">
              <div className="hero__cats-title">Categorías</div>
              <div className="hero__cats-body">
                <svg width="74" height="74" viewBox="0 0 74 74"><circle cx="37" cy="37" r="29" fill="none" stroke="#EEF2FB" strokeWidth="11" /><circle className="hero__donut-ring" data-ring data-circ="182.2" data-pct="60" cx="37" cy="37" r="29" fill="none" stroke="url(#donutg)" strokeWidth="11" strokeLinecap="round" strokeDasharray="182.2" strokeDashoffset="182.2" transform="rotate(-90 37 37)" /><defs><linearGradient id="donutg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2563EB" /><stop offset="1" stopColor="#7C5BE6" /></linearGradient></defs></svg>
                <div>
                  <div className="hero__legend"><span className="hero__legend-dot" style={{ background: '#2563EB' }} />Deportivas <span className="hero__legend-pct" data-count="60" data-suffix="%">0%</span></div>
                  <div className="hero__legend"><span className="hero__legend-dot" style={{ background: '#A5A3F5' }} />Casual 22%</div>
                  <div className="hero__legend"><span className="hero__legend-dot" style={{ background: '#EEF2FB' }} />Otras 18%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tarjeta: Ventas (mini barras) */}
          <div className="hero__stat hero__stat--sales" data-depth="18" data-reveal data-delay="440">
            <div className="hero__stat-card">
              <div className="hero__sales-head"><span className="hero__stat-label">Ventas</span><span className="hero__pill-up">+23.4%</span></div>
              <div className="hero__sales-bars">
                {salesBars.map((b, i) => (
                  <div key={i} className="hero__sales-bar" data-bar data-fill={b.fill} style={{ background: b.bg, transitionDelay: b.delay }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
