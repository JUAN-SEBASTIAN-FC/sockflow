import css from '../lib/css';

const cardStyle = css(
  'background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:24px;opacity:0;transform:translateY(26px);transition:opacity .7s cubic-bezier(.4,0,.2,1),transform .7s cubic-bezier(.4,0,.2,1),background .3s,border-color .3s',
);

const features = [
  { delay: '0', grad: 'linear-gradient(135deg,#2563EB,#7C5BE6)', shadow: '0 8px 20px rgba(37,99,235,.4)', title: 'Edición masiva', desc: 'Actualiza precios, tallas, colores y más en segundos.', icon: <><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" /></> },
  { delay: '90', grad: 'linear-gradient(135deg,#2563EB,#60A5FA)', shadow: '0 8px 20px rgba(37,99,235,.4)', title: 'Control de stock', desc: 'Visualiza tu inventario en tiempo real, sin sorpresas.', icon: <><rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 12l2 2 4-4" /></> },
  { delay: '180', grad: 'linear-gradient(135deg,#7C5BE6,#60A5FA)', shadow: '0 8px 20px rgba(124,91,230,.4)', title: 'Alertas inteligentes', desc: 'Recibe avisos de bajo stock y reposición a tiempo.', icon: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.7 21a2 2 0 0 1-3.4 0" /></> },
  { delay: '270', grad: 'linear-gradient(135deg,#1E3A8A,#2563EB)', shadow: '0 8px 20px rgba(30,58,138,.45)', title: 'Reportes avanzados', desc: 'Toma decisiones con datos claros y precisos.', icon: <><path d="M3 17l5-5 4 4 7-8" /><path d="M16 4h5v5" /></> },
];

export default function Features() {
  return (
    <section id="producto" style={css('padding:0 40px;margin:8px 0 96px')}>
      <div data-reveal style={css('max-width:1240px;margin:0 auto;background:linear-gradient(150deg,#1E293B 0%,#1E3A8A 100%);border-radius:32px;padding:54px 52px;position:relative;overflow:hidden;box-shadow:0 30px 70px -24px rgba(30,58,138,.5);opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)')}>
        <div style={css('position:absolute;top:-80px;right:-40px;width:300px;height:300px;border-radius:50%;background:radial-gradient(circle,rgba(96,165,250,.35),transparent 68%);filter:blur(10px);animation:sfDrift 26s ease-in-out infinite')} />
        <div style={css('position:absolute;bottom:-90px;left:30%;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(124,91,230,.3),transparent 68%);filter:blur(10px);animation:sfDrift 30s ease-in-out infinite reverse')} />

        <div style={css('position:relative;z-index:2')}>
          <div style={css('display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap')}>
            <div>
              <span style={css('font-family:var(--font-display);font-weight:600;font-size:12.5px;letter-spacing:.06em;text-transform:uppercase;color:#7DD3FC')}>Plataforma todo-en-uno</span>
              <h2 style={css('font-family:var(--font-display);font-weight:800;font-size:40px;line-height:1.1;letter-spacing:-.02em;color:#fff;margin:14px 0 0')}>Todo lo que necesitas<br />para escalar tu negocio</h2>
            </div>
            <span style={css('display:inline-flex;align-items:center;gap:8px;font-size:13.5px;font-weight:500;color:rgba(255,255,255,.7)')}><span style={css('width:9px;height:9px;border-radius:50%;background:#7DD3FC;box-shadow:0 0 0 5px rgba(125,211,252,.2)')} />Sincronización en vivo</span>
          </div>

          <div style={css('display:grid;grid-template-columns:repeat(4,1fr);gap:18px;margin-top:38px')}>
            {features.map((f) => (
              <div
                key={f.title}
                data-reveal
                data-delay={f.delay}
                style={cardStyle}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,.1)'; e.currentTarget.style.borderColor = 'rgba(125,211,252,.4)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,.06)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,.12)'; }}
              >
                <span style={css(`display:inline-flex;width:46px;height:46px;border-radius:13px;background:${f.grad};align-items:center;justify-content:center;box-shadow:${f.shadow}`)}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">{f.icon}</svg>
                </span>
                <h3 style={css('font-family:var(--font-display);font-weight:700;font-size:18px;color:#fff;margin:18px 0 8px')}>{f.title}</h3>
                <p style={css('font-family:var(--font-body);font-size:14px;line-height:1.55;color:rgba(255,255,255,.66);margin:0')}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
