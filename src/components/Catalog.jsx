import css from '../lib/css';
import products from '../data/products';
import ProductCard from './ProductCard';

const filters = [
  { value: 'all', label: 'Todas', active: true },
  { value: 'deportiva', label: 'Deportiva' },
  { value: 'casual', label: 'Casual' },
  { value: 'ejecutiva', label: 'Ejecutiva' },
  { value: 'termica', label: 'Térmica' },
];

const tabActive = css(
  'font-family:var(--font-display);font-weight:600;font-size:14px;padding:11px 22px;border-radius:9999px;border:1px solid transparent;background:#1E3A8A;color:#fff;cursor:pointer;box-shadow:0 6px 18px rgba(30,58,138,.3);transition:all .25s cubic-bezier(.4,0,.2,1)',
);
const tabIdle = css(
  'font-family:var(--font-display);font-weight:600;font-size:14px;padding:11px 22px;border-radius:9999px;border:1px solid #DCE9F7;background:#fff;color:#475569;cursor:pointer;transition:all .25s cubic-bezier(.4,0,.2,1)',
);

export default function Catalog() {
  return (
    <section id="catalogo" style={css('padding:0 40px 100px;position:relative')}>
      <div style={css('position:absolute;top:8%;right:2%;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(124,91,230,.12),transparent 68%);filter:blur(10px);z-index:0;animation:sfDrift 28s ease-in-out infinite')} />
      <div style={css('max-width:1240px;margin:0 auto;position:relative;z-index:2')}>
        <div data-reveal style={css('text-align:center;max-width:620px;margin:0 auto;opacity:0;transform:translateY(30px);transition:opacity .8s cubic-bezier(.4,0,.2,1),transform .8s cubic-bezier(.4,0,.2,1)')}>
          <span style={css('font-family:var(--font-display);font-weight:600;font-size:12.5px;letter-spacing:.06em;text-transform:uppercase;color:#2563EB')}>Catálogo</span>
          <h2 style={css('font-family:var(--font-display);font-weight:800;font-size:46px;line-height:1.08;letter-spacing:-.025em;color:#1E293B;margin:14px 0 0')}>Una galería de <span style={css('background:linear-gradient(100deg,#2563EB,#7C5BE6);-webkit-background-clip:text;background-clip:text;color:transparent')}>medias premium</span></h2>
          <p style={css('font-family:var(--font-body);font-size:17px;line-height:1.55;color:#64748B;margin:18px auto 0;max-width:480px')}>Cada modelo, con su stock vinculado en tiempo real. Filtra por tipo de uso y explora la colección.</p>
        </div>

        {/* filter tabs */}
        <div data-reveal style={css('display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin:36px 0 40px;opacity:0;transform:translateY(20px);transition:opacity .7s ease,transform .7s ease')}>
          {filters.map((f) => (
            <button key={f.value} data-filter={f.value} style={f.active ? tabActive : tabIdle}>{f.label}</button>
          ))}
        </div>

        {/* product grid */}
        <div style={css('display:grid;grid-template-columns:repeat(4,1fr);gap:24px')}>
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
