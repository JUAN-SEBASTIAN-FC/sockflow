import css from '../lib/css';

/**
 * Tarjeta de producto del catálogo. Los colores de badges, el filtro de la
 * imagen y los puntos de colorway se aplican desde el hook `useLandingEffects`
 * leyendo los `data-*`, igual que en el diseño original.
 */
export default function ProductCard({ product: p }) {
  return (
    <article
      data-product
      data-tilt
      data-reveal
      data-slug={p.slug}
      data-filter-css={p.filter}
      data-colors={p.colors}
      data-scolor={p.scolor}
      data-sbg={p.sbg}
      data-catbg={p.catbg}
      data-catcolor={p.catcolor}
      data-delay={p.delay}
      style={css('position:relative;background:#fff;border:1px solid #DCE9F7;border-radius:24px;padding:14px;box-shadow:var(--shadow-md);opacity:0;transform:translateY(30px);transition:opacity .6s cubic-bezier(.4,0,.2,1),transform .35s cubic-bezier(.4,0,.2,1),box-shadow .35s ease,border-color .35s ease;transform-style:preserve-3d;will-change:transform;cursor:pointer')}
    >
      <div data-glare style={css('position:absolute;inset:0;border-radius:24px;pointer-events:none;z-index:5;background:transparent;transition:background .15s')} />
      <div style={css('position:relative;border-radius:16px;overflow:hidden;height:212px;background:radial-gradient(120% 100% at 50% 22%,#EFF6FF,#DCE9F7 70%,#E7E3FB)')}>
        <span data-catbadge style={css('position:absolute;top:12px;left:12px;z-index:3;font-family:var(--font-display);font-weight:600;font-size:11.5px;padding:5px 11px;border-radius:9999px;background:rgba(37,99,235,.10);color:#2563EB')}>{p.cat}</span>
        <span data-statusbadge style={css('position:absolute;top:12px;right:12px;z-index:3;display:inline-flex;align-items:center;gap:5px;font-family:var(--font-display);font-weight:600;font-size:11px;padding:5px 10px;border-radius:9999px;background:rgba(16,185,129,.10);color:#059669')}><span data-statusdot style={css('width:6px;height:6px;border-radius:50%;background:#10B981')} />{p.status}</span>
        <img data-pimg src="assets/sock.png" alt={p.name} style={css('width:100%;height:100%;object-fit:cover;object-position:50% 44%;transform:scale(1.04);transition:transform .5s cubic-bezier(.4,0,.2,1)')} />
      </div>
      <div style={css('padding:16px 8px 8px')}>
        <div style={css('display:flex;align-items:baseline;justify-content:space-between;gap:10px')}>
          <h3 style={css('font-family:var(--font-display);font-weight:700;font-size:17px;color:#1E293B;margin:0;letter-spacing:-.01em')}>{p.name}</h3>
          <span style={css('font-family:var(--font-display);font-weight:800;font-size:17px;color:#2563EB;white-space:nowrap')}>{p.price}</span>
        </div>
        <p style={css('font-family:var(--font-body);font-size:13px;color:#94A3B8;margin:6px 0 0')}>{p.desc}</p>
        <div style={css('display:flex;align-items:center;justify-content:space-between;margin-top:14px;padding-top:14px;border-top:1px solid #EEF2FB')}>
          <div data-dots style={css('display:flex;gap:5px')} />
          <span style={css('font-family:var(--font-body);font-size:12px;color:#64748B')}><span data-units style={css('font-weight:700;color:#334155')}>{p.units}</span> uds.</span>
        </div>
      </div>
    </article>
  );
}
