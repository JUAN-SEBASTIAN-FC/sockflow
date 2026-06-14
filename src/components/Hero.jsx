import css from '../lib/css';

const chipStyle = css(
  'display:inline-flex;align-items:center;gap:9px;background:rgba(255,255,255,.7);border:1px solid #DCE9F7;backdrop-filter:blur(8px);padding:10px 15px;border-radius:14px;font-family:var(--font-body);font-size:13.5px;font-weight:500;color:#334155;box-shadow:var(--shadow-sm)',
);
const chipIcon = css(
  'display:inline-flex;width:26px;height:26px;border-radius:8px;background:rgba(37,99,235,.10);align-items:center;justify-content:center',
);

const chips = [
  { label: 'Inventario en tiempo real', path: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
  { label: 'Edición masiva', path: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></> },
  { label: 'Reportes inteligentes', path: <><path d="M3 17l5-5 4 4 7-8" /><path d="M16 4h5v5" /></> },
  { label: 'Multi-almacén', path: <><path d="M3 9h18M3 15h18M9 3v18" /><rect x="3" y="3" width="18" height="18" rx="2" /></> },
];

export default function Hero() {
  return (
    <section id="top" style={css('position:relative')}>
      <div style={css('position:absolute;inset:0;background:linear-gradient(125deg,#EFF6FF 0%,#DCE9F7 32%,#E7E3FB 58%,#EFF6FF 100%);background-size:300% 300%;animation:sfGrad 22s ease infinite;z-index:0')} />

      {/* bg blobs */}
      <div data-depth="26" style={css('position:absolute;top:6%;left:-4%;z-index:0')}><div style={css('width:340px;height:340px;border-radius:50%;background:radial-gradient(circle at 35% 35%,rgba(96,165,250,.45),rgba(37,99,235,.12) 60%,transparent 72%);filter:blur(8px);animation:sfDrift 24s ease-in-out infinite')} /></div>
      <div data-depth="-34" style={css('position:absolute;top:30%;right:-6%;z-index:0')}><div style={css('width:420px;height:420px;border-radius:50%;background:radial-gradient(circle at 60% 40%,rgba(165,163,245,.4),rgba(124,58,237,.10) 58%,transparent 72%);filter:blur(10px);animation:sfDrift 30s ease-in-out infinite reverse')} /></div>
      <div data-depth="18" style={css('position:absolute;bottom:4%;left:24%;z-index:0')}><div style={css('width:260px;height:260px;border-radius:50%;background:radial-gradient(circle at 50% 50%,rgba(125,211,252,.35),transparent 70%);filter:blur(8px);animation:sfDrift 20s ease-in-out infinite')} /></div>
      <div data-depth="-12" style={css('position:absolute;top:14%;right:18%;width:120px;height:120px;border:1.5px solid rgba(37,99,235,.14);border-radius:50%;z-index:0;animation:sfSpin 40s linear infinite')} />

      <div style={css('position:relative;z-index:2;max-width:1240px;margin:0 auto;padding:72px 40px 96px;display:grid;grid-template-columns:1.02fr .98fr;gap:30px;align-items:center')}>
        {/* left copy */}
        <div data-reveal style={css('opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)')}>
          <span style={css('display:inline-flex;align-items:center;gap:7px;font-family:var(--font-display);font-weight:600;font-size:12.5px;letter-spacing:.02em;color:#2563EB;background:rgba(37,99,235,.10);padding:7px 14px;border-radius:9999px')}><span style={css('width:6px;height:6px;border-radius:50%;background:#2563EB;box-shadow:0 0 0 4px rgba(37,99,235,.16)')} />Inventario inteligente · 2026</span>
          <h1 style={css('font-family:var(--font-display);font-weight:800;font-size:66px;line-height:1.04;letter-spacing:-.03em;margin:22px 0 0;color:#1E293B')}>Control total<br />de tu inventario<br />de <span style={css('background:linear-gradient(100deg,#2563EB,#7C5BE6 55%,#60A5FA);-webkit-background-clip:text;background-clip:text;color:transparent')}>medias</span></h1>
          <p style={css('font-family:var(--font-body);font-size:18.5px;line-height:1.55;color:#64748B;max-width:440px;margin:24px 0 0')}>Gestiona, edita y controla tu stock en tiempo real. Menos desorden, más ventas.</p>

          <div style={css('display:flex;align-items:center;gap:16px;margin-top:34px')}>
            <a
              href="#catalogo"
              data-glowcta
              style={css('position:relative;display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:600;font-size:16px;letter-spacing:-.01em;color:#fff;background:#1E3A8A;padding:16px 34px;border-radius:9999px;text-decoration:none;box-shadow:0 6px 26px rgba(30,58,138,.42);transition:transform .2s cubic-bezier(.4,0,.2,1),box-shadow .25s;overflow:hidden')}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.035)'; e.currentTarget.style.boxShadow = '0 12px 34px rgba(37,99,235,.5)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 6px 26px rgba(30,58,138,.42)'; }}
            >
              <span style={css('position:absolute;inset:0;background:linear-gradient(110deg,transparent 20%,rgba(255,255,255,.35) 50%,transparent 80%);background-size:220% 100%;animation:sfShimmer 4.5s ease-in-out infinite')} />
              <span style={css('position:relative')}>Comenzar gratis</span>
            </a>
            <a
              href="#stock"
              style={css('display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:16px;color:#2563EB;text-decoration:none;padding:14px 8px;transition:gap .2s,color .2s')}
              onMouseOver={(e) => { e.currentTarget.style.gap = '12px'; }}
              onMouseOut={(e) => { e.currentTarget.style.gap = '8px'; }}
            >
              Ver demo<span style={css('transition:transform .2s')}>→</span>
            </a>
          </div>

          {/* feature chips */}
          <div style={css('display:flex;flex-wrap:wrap;gap:10px;margin-top:38px')}>
            {chips.map((c) => (
              <span key={c.label} style={chipStyle}>
                <span style={chipIcon}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{c.path}</svg>
                </span>
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* right visual */}
        <div style={css('position:relative;min-height:560px')}>
          <div data-depth="10" style={css('position:absolute;top:48%;left:52%;transform:translate(-50%,-50%);z-index:1')}>
            <div style={css('width:440px;height:440px;border-radius:50%;border:1px solid rgba(124,91,230,.18);background:radial-gradient(circle,rgba(231,227,251,.5),rgba(220,233,247,.15) 60%,transparent 72%);animation:sfHalo 7s ease-in-out infinite')} />
          </div>

          <div data-depth="-16" data-sockwrap style={css('position:relative;z-index:3;display:flex;align-items:center;justify-content:center')}>
            <div style={css('animation:sfFloatSock 7s ease-in-out infinite;filter:drop-shadow(0 40px 60px rgba(37,99,235,.28))')}>
              <img src="assets/sock.png" alt="Media deportiva premium SockFlow" style={css('width:430px;border-radius:28px;box-shadow:0 30px 80px -20px rgba(30,58,138,.35)')} />
            </div>
          </div>

          {/* floating orbs */}
          <div data-depth="40" style={css('position:absolute;top:8%;right:10%;z-index:4')}><div style={css('width:46px;height:46px;border-radius:50%;background:radial-gradient(circle at 32% 30%,#C7C2F7,#6D5BD0 75%);box-shadow:0 14px 30px rgba(109,91,208,.4);animation:sfBobA 5.5s ease-in-out infinite')} /></div>
          <div data-depth="-30" style={css('position:absolute;bottom:14%;left:4%;z-index:4')}><div style={css('width:30px;height:30px;border-radius:50%;background:radial-gradient(circle at 32% 30%,#CBD8FA,#3B6FE0 78%);box-shadow:0 10px 24px rgba(37,99,235,.4);animation:sfBobB 6.5s ease-in-out infinite')} /></div>
          <div data-depth="24" style={css('position:absolute;bottom:30%;right:2%;z-index:2')}><div style={css('width:18px;height:18px;border-radius:50%;background:radial-gradient(circle at 32% 30%,#D8E6FF,#7DD3FC 80%);box-shadow:0 8px 18px rgba(125,211,252,.5);animation:sfBobC 5s ease-in-out infinite')} /></div>

          {/* floating stat card: Stock total */}
          <div data-depth="-20" data-reveal data-delay="180" style={css('position:absolute;top:6%;left:-6%;z-index:6;opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)')}>
            <div style={css('background:#fff;border:1px solid #DCE9F7;border-radius:20px;padding:16px 20px;box-shadow:var(--shadow-xl);min-width:178px;animation:sfBobA 8s ease-in-out infinite')}>
              <div style={css('font-family:var(--font-body);font-size:12.5px;font-weight:500;color:#64748B')}>Stock total</div>
              <div style={css('display:flex;align-items:baseline;gap:8px;margin-top:4px')}><span data-count="12458" data-sep="1" style={css('font-family:var(--font-display);font-weight:800;font-size:30px;letter-spacing:-.02em;color:#1E293B')}>0</span></div>
              <div style={css('display:flex;align-items:center;gap:7px;margin-top:6px')}><span style={css('display:inline-flex;align-items:center;gap:3px;font-size:11px;font-weight:700;color:#059669;background:rgba(16,185,129,.10);padding:3px 8px;border-radius:9999px')}>↑ 12.8%</span><span style={css('font-size:11px;color:#94A3B8')}>vs ayer</span></div>
              <svg width="138" height="34" viewBox="0 0 138 34" style={css('margin-top:8px;display:block')}><path d="M2 26 C18 20 26 28 40 18 C54 9 64 22 78 14 C92 7 104 16 118 8 L136 4" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" /><path d="M2 26 C18 20 26 28 40 18 C54 9 64 22 78 14 C92 7 104 16 118 8 L136 4 L136 34 L2 34 Z" fill="url(#sparkfill)" opacity=".18" /><defs><linearGradient id="sparkfill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#2563EB" /><stop offset="1" stopColor="#2563EB" stopOpacity="0" /></linearGradient></defs></svg>
            </div>
          </div>

          {/* floating stat card: Categorias donut */}
          <div data-depth="22" data-reveal data-delay="320" style={css('position:absolute;top:26%;right:-8%;z-index:6;opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)')}>
            <div style={css('background:#fff;border:1px solid #DCE9F7;border-radius:20px;padding:16px 18px;box-shadow:var(--shadow-xl);animation:sfBobB 9s ease-in-out infinite')}>
              <div style={css('font-family:var(--font-body);font-size:12.5px;font-weight:500;color:#64748B;margin-bottom:8px')}>Categorías</div>
              <div style={css('display:flex;align-items:center;gap:12px')}>
                <svg width="74" height="74" viewBox="0 0 74 74"><circle cx="37" cy="37" r="29" fill="none" stroke="#EEF2FB" strokeWidth="11" /><circle data-ring data-circ="182.2" data-pct="60" cx="37" cy="37" r="29" fill="none" stroke="url(#donutg)" strokeWidth="11" strokeLinecap="round" strokeDasharray="182.2" strokeDashoffset="182.2" transform="rotate(-90 37 37)" style={css('transition:stroke-dashoffset 1.4s cubic-bezier(.4,0,.2,1)')} /><defs><linearGradient id="donutg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2563EB" /><stop offset="1" stopColor="#7C5BE6" /></linearGradient></defs></svg>
                <div>
                  <div style={css('display:flex;align-items:center;gap:6px;font-size:11.5px;color:#475569;font-weight:500')}><span style={css('width:8px;height:8px;border-radius:3px;background:#2563EB')} />Deportivas <span data-count="60" data-suffix="%" style={css('font-weight:700;color:#1E293B')}>0%</span></div>
                  <div style={css('display:flex;align-items:center;gap:6px;font-size:11.5px;color:#475569;font-weight:500;margin-top:6px')}><span style={css('width:8px;height:8px;border-radius:3px;background:#A5A3F5')} />Casual 22%</div>
                  <div style={css('display:flex;align-items:center;gap:6px;font-size:11.5px;color:#475569;font-weight:500;margin-top:6px')}><span style={css('width:8px;height:8px;border-radius:3px;background:#EEF2FB')} />Otras 18%</div>
                </div>
              </div>
            </div>
          </div>

          {/* floating stat card: Ventas mini bars */}
          <div data-depth="18" data-reveal data-delay="440" style={css('position:absolute;bottom:2%;right:6%;z-index:6;opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)')}>
            <div style={css('background:#fff;border:1px solid #DCE9F7;border-radius:20px;padding:16px 18px;box-shadow:var(--shadow-xl);min-width:158px;animation:sfBobC 7.5s ease-in-out infinite')}>
              <div style={css('display:flex;align-items:center;justify-content:space-between')}><span style={css('font-family:var(--font-body);font-size:12.5px;font-weight:500;color:#64748B')}>Ventas</span><span style={css('font-size:11px;font-weight:700;color:#059669;background:rgba(16,185,129,.10);padding:3px 8px;border-radius:9999px')}>+23.4%</span></div>
              <div style={css('display:flex;align-items:flex-end;gap:7px;height:48px;margin-top:12px')}>
                {[
                  { fill: '38%', bg: 'linear-gradient(#60A5FA,#2563EB)', delay: '.1s' },
                  { fill: '58%', bg: 'linear-gradient(#60A5FA,#2563EB)', delay: '.2s' },
                  { fill: '46%', bg: 'linear-gradient(#7C5BE6,#2563EB)', delay: '.3s' },
                  { fill: '78%', bg: 'linear-gradient(#7C5BE6,#2563EB)', delay: '.4s' },
                  { fill: '64%', bg: 'linear-gradient(#A5A3F5,#60A5FA)', delay: '.5s' },
                  { fill: '92%', bg: 'linear-gradient(#A5A3F5,#60A5FA)', delay: '.6s' },
                ].map((b, i) => (
                  <div key={i} data-bar data-fill={b.fill} style={css(`width:12px;height:0;align-self:flex-end;background:${b.bg};border-radius:4px 4px 0 0;transition:height 1s cubic-bezier(.4,0,.2,1) ${b.delay}`)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
