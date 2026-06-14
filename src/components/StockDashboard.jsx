import css from '../lib/css';

const kpiStyle = css('background:var(--color-bg);border:1px solid #EEF2FB;border-radius:18px;padding:20px');
const kpiLabel = css('font-family:var(--font-body);font-size:13px;font-weight:500;color:#64748B');
const kpiValue = css('font-family:var(--font-display);font-weight:800;font-size:32px;letter-spacing:-.02em;color:#1E293B;margin-top:6px');
const kpiBadge = css('display:inline-flex;align-items:center;gap:4px;margin-top:8px;font-size:12px;font-weight:700;color:#059669;background:rgba(16,185,129,.10);padding:3px 9px;border-radius:9999px');

const kpis = [
  { label: 'Stock total', count: '12458', delta: '↑ 12.8%' },
  { label: 'Órdenes', count: '3467', delta: '↑ 18.2%' },
  { label: 'Productos activos', count: '1245', delta: '↑ 10.4%' },
  { label: 'Clientes', count: '2890', delta: '↑ 8.3%' },
];

const rings = [
  { pct: '60', count: '60', color: '#2563EB', label: 'Deportiva' },
  { pct: '22', count: '22', color: '#7C5BE6', label: 'Casual' },
  { pct: '12', count: '12', color: '#60A5FA', label: 'Ejecutiva' },
  { pct: '6', count: '6', color: '#A5A3F5', label: 'Térmica' },
];

const levels = [
  { name: 'Pro Runner 2.0', units: '1,240 uds.', unitColor: '#64748B', unitWeight: '400', fill: '88%', bar: 'linear-gradient(90deg,#2563EB,#60A5FA)', delay: '' },
  { name: 'Daily Soft', units: '1,820 uds.', unitColor: '#64748B', unitWeight: '400', fill: '96%', bar: 'linear-gradient(90deg,#2563EB,#60A5FA)', delay: ' .1s' },
  { name: 'Merino Boss', units: '38 uds. · pocas', unitColor: '#B45309', unitWeight: '600', fill: '14%', bar: 'linear-gradient(90deg,#F59E0B,#FBBF24)', delay: ' .2s' },
  { name: 'Thermo Peak', units: '0 uds. · agotado', unitColor: '#DC2626', unitWeight: '600', fill: '4%', bar: 'linear-gradient(90deg,#EF4444,#F87171)', delay: ' .3s' },
];

export default function StockDashboard() {
  return (
    <section id="stock" style={css('padding:0 40px 100px')}>
      <div style={css('max-width:1240px;margin:0 auto')}>
        <div data-reveal style={css('text-align:center;max-width:600px;margin:0 auto 44px;opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)')}>
          <span style={css('font-family:var(--font-display);font-weight:600;font-size:12.5px;letter-spacing:.06em;text-transform:uppercase;color:#2563EB')}>Gestión de stock</span>
          <h2 style={css('font-family:var(--font-display);font-weight:800;font-size:46px;line-height:1.08;letter-spacing:-.025em;color:#1E293B;margin:14px 0 0')}>Tu inventario, bajo control</h2>
          <p style={css('font-family:var(--font-body);font-size:17px;line-height:1.55;color:#64748B;margin:18px auto 0;max-width:460px')}>Un panel sofisticado, no técnico. Niveles, disponibilidad y tendencias, siempre actualizados.</p>
        </div>

        <div data-reveal style={css('background:#fff;border:1px solid #DCE9F7;border-radius:30px;padding:34px;box-shadow:var(--shadow-xl);opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)')}>
          {/* KPI row */}
          <div style={css('display:grid;grid-template-columns:repeat(4,1fr);gap:16px')}>
            {kpis.map((k) => (
              <div key={k.label} style={kpiStyle}>
                <div style={kpiLabel}>{k.label}</div>
                <div style={kpiValue}><span data-count={k.count} data-sep="1">0</span></div>
                <span style={kpiBadge}>{k.delta}</span>
              </div>
            ))}
          </div>

          <div style={css('display:grid;grid-template-columns:1fr 1.25fr;gap:24px;margin-top:24px')}>
            {/* distribution rings */}
            <div style={css('background:var(--color-bg);border:1px solid #EEF2FB;border-radius:22px;padding:26px')}>
              <h3 style={css('font-family:var(--font-display);font-weight:700;font-size:17px;color:#1E293B;margin:0 0 22px')}>Distribución por categoría</h3>
              <div style={css('display:grid;grid-template-columns:repeat(2,1fr);gap:22px')}>
                {rings.map((r) => (
                  <div key={r.label} style={css('display:flex;align-items:center;gap:14px')}>
                    <svg width="78" height="78" viewBox="0 0 78 78"><circle cx="39" cy="39" r="31" fill="none" stroke="#EEF2FB" strokeWidth="9" /><circle data-ring data-circ="194.8" data-pct={r.pct} cx="39" cy="39" r="31" fill="none" stroke={r.color} strokeWidth="9" strokeLinecap="round" strokeDasharray="194.8" strokeDashoffset="194.8" transform="rotate(-90 39 39)" style={css('transition:stroke-dashoffset 1.5s cubic-bezier(.4,0,.2,1)')} /></svg>
                    <div><div style={css('font-family:var(--font-display);font-weight:800;font-size:22px;color:#1E293B')}><span data-count={r.count} data-suffix="%">0%</span></div><div style={css('font-family:var(--font-body);font-size:13px;color:#64748B')}>{r.label}</div></div>
                  </div>
                ))}
              </div>
            </div>

            {/* stock levels + availability */}
            <div style={css('background:var(--color-bg);border:1px solid #EEF2FB;border-radius:22px;padding:26px')}>
              <div style={css('display:flex;align-items:center;justify-content:space-between;margin-bottom:22px')}>
                <h3 style={css('font-family:var(--font-display);font-weight:700;font-size:17px;color:#1E293B;margin:0')}>Niveles de stock</h3>
                <div style={css('display:flex;gap:14px')}>
                  <span style={css('display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#64748B')}><span style={css('width:8px;height:8px;border-radius:50%;background:#10B981')} />Disponible</span>
                  <span style={css('display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#64748B')}><span style={css('width:8px;height:8px;border-radius:50%;background:#F59E0B')} />Pocas</span>
                  <span style={css('display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#64748B')}><span style={css('width:8px;height:8px;border-radius:50%;background:#EF4444')} />Agotado</span>
                </div>
              </div>
              <div style={css('display:flex;flex-direction:column;gap:17px')}>
                {levels.map((l) => (
                  <div key={l.name}>
                    <div style={css('display:flex;justify-content:space-between;font-size:13.5px;margin-bottom:7px')}><span style={css('font-weight:600;color:#334155')}>{l.name}</span><span style={css(`color:${l.unitColor};font-weight:${l.unitWeight}`)}>{l.units}</span></div>
                    <div style={css('height:9px;border-radius:9999px;background:#EEF2FB;overflow:hidden')}><div data-bar data-fill={l.fill} style={css(`height:100%;width:0;background:${l.bar};border-radius:9999px;transition:width 1.2s cubic-bezier(.4,0,.2,1)${l.delay}`)} /></div>
                  </div>
                ))}
              </div>

              {/* mini line chart */}
              <div style={css('margin-top:24px;padding-top:22px;border-top:1px solid #EEF2FB')}>
                <div style={css('display:flex;align-items:center;justify-content:space-between;margin-bottom:10px')}><span style={css('font-family:var(--font-display);font-weight:700;font-size:14px;color:#1E293B')}>Ventas · últimos 6 meses</span><span style={css('font-size:12px;font-weight:700;color:#059669;background:rgba(16,185,129,.10);padding:3px 9px;border-radius:9999px')}>+23.4%</span></div>
                <svg viewBox="0 0 520 110" style={css('width:100%;height:96px;display:block')} preserveAspectRatio="none">
                  <path data-line d="M6 86 C70 70 90 58 150 60 C210 62 230 34 290 38 C350 42 372 22 430 18 C470 15 494 12 514 8" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeDasharray="900" strokeDashoffset="900" style={css('transition:stroke-dashoffset 1.8s cubic-bezier(.4,0,.2,1)')} />
                  <path d="M6 86 C70 70 90 58 150 60 C210 62 230 34 290 38 C350 42 372 22 430 18 C470 15 494 12 514 8 L514 108 L6 108 Z" fill="url(#linefill)" opacity=".14" />
                  <defs><linearGradient id="linefill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2563EB" /><stop offset="1" stopColor="#2563EB" stopOpacity="0" /></linearGradient></defs>
                </svg>
                <div style={css('display:flex;justify-content:space-between;font-size:11.5px;color:#94A3B8;margin-top:4px')}><span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
