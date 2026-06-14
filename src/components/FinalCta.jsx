import css from '../lib/css';

export default function FinalCta() {
  return (
    <section id="beneficios" style={css('padding:0 40px 90px')}>
      <div data-reveal style={css('position:relative;max-width:1240px;margin:0 auto;border-radius:34px;overflow:hidden;background:linear-gradient(130deg,#1E3A8A 0%,#2563EB 48%,#6D5BD0 100%);padding:74px 56px;text-align:center;box-shadow:0 34px 80px -26px rgba(37,99,235,.55);opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)')}>
        <div data-depth="30" style={css('position:absolute;top:-60px;left:8%;width:240px;height:240px;border-radius:50%;background:radial-gradient(circle,rgba(125,211,252,.5),transparent 66%);filter:blur(8px);animation:sfDrift 24s ease-in-out infinite')} />
        <div data-depth="-26" style={css('position:absolute;bottom:-70px;right:10%;width:280px;height:280px;border-radius:50%;background:radial-gradient(circle,rgba(165,163,245,.5),transparent 66%);filter:blur(10px);animation:sfDrift 30s ease-in-out infinite reverse')} />
        <div style={css('position:absolute;top:30%;right:24%;width:16px;height:16px;border-radius:50%;background:#BFE3FF;box-shadow:0 0 20px rgba(125,211,252,.8);animation:sfBobA 5s ease-in-out infinite')} />

        <div style={css('position:relative;z-index:2')}>
          <h2 style={css('font-family:var(--font-display);font-weight:800;font-size:54px;line-height:1.05;letter-spacing:-.03em;color:#fff;margin:0')}>Empieza hoy. Crece mañana.</h2>
          <p style={css('font-family:var(--font-body);font-size:18px;line-height:1.55;color:rgba(255,255,255,.82);max-width:480px;margin:20px auto 0')}>Únete a cientos de negocios de moda que ya optimizan su inventario de medias con SockFlow.</p>
          <div style={css('display:flex;align-items:center;justify-content:center;gap:16px;margin-top:36px')}>
            <a
              href="#contacto"
              style={css('position:relative;display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-display);font-weight:700;font-size:16px;color:#1E3A8A;background:#fff;padding:16px 36px;border-radius:9999px;text-decoration:none;box-shadow:0 10px 30px rgba(0,0,0,.18);overflow:hidden;transition:transform .2s cubic-bezier(.4,0,.2,1),box-shadow .25s')}
              onMouseOver={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 14px 38px rgba(0,0,0,.26)'; }}
              onMouseOut={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,.18)'; }}
            >
              <span style={css('position:absolute;inset:0;background:linear-gradient(110deg,transparent 20%,rgba(37,99,235,.16) 50%,transparent 80%);background-size:220% 100%;animation:sfShimmer 4.5s ease-in-out infinite')} />
              <span style={css('position:relative')}>Comenzar gratis</span>
            </a>
            <a
              href="#catalogo"
              style={css('display:inline-flex;align-items:center;gap:8px;font-family:var(--font-display);font-weight:600;font-size:16px;color:#fff;text-decoration:none;padding:14px 8px;transition:gap .2s')}
              onMouseOver={(e) => { e.currentTarget.style.gap = '12px'; }}
              onMouseOut={(e) => { e.currentTarget.style.gap = '8px'; }}
            >
              Ver demo<span>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
