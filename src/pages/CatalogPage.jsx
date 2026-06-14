import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../context/ProductsContext';
import ImageLightbox from '../components/ImageLightbox';
import './CatalogPage.css';

const DISPS = ['Todas', 'Disponible', 'Pocas unidades', 'Agotado'];
const COLORES = [
  { label: 'Azul',    hex: '#2563EB' },
  { label: 'Negro',   hex: '#1E293B' },
  { label: 'Gris',    hex: '#94A3B8' },
  { label: 'Morado',  hex: '#7C3AED' },
  { label: 'Celeste', hex: '#60A5FA' },
];

const priceVal = (str) => parseInt((str || '0').replace(/\D/g, ''), 10);

export default function CatalogPage() {
  const navigate = useNavigate();
  const { products, categories, loading } = useProducts();

  const [search,   setSearch]   = useState('');
  const [tipo,     setTipo]     = useState('Todas');
  const [disp,     setDisp]     = useState('Todas');
  const [color,    setColor]    = useState('');
  const [priceMax, setPriceMax] = useState(100000);
  const [lightbox, setLightbox] = useState(null);
  const [filtersOpen, setFiltersOpen] = useState(false);

  // Tipos dinámicos desde categorías
  const TIPOS = useMemo(() => ['Todas', ...categories.map((c) => c.name)], [categories]);

  const sanitizeSearch = (val) => val.replace(/[<>"'`]/g, '').slice(0, 100);

  const allPrices = useMemo(() => products.map((p) => priceVal(p.price)).filter(Boolean), [products]);
  const maxPrice  = allPrices.length ? Math.max(...allPrices) : 100000;

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (search && !p.name.toLowerCase().includes(search.toLowerCase()) &&
          !p.cat.toLowerCase().includes(search.toLowerCase())) return false;
      if (tipo !== 'Todas' && p.cat !== tipo) return false;
      if (disp !== 'Todas' && p.status !== disp) return false;
      if (color && !p.colors.toLowerCase().includes(color.toLowerCase())) return false;
      if (priceVal(p.price) > priceMax) return false;
      return true;
    });
  }, [products, search, tipo, disp, color, priceMax]);

  const clearFilters = () => {
    setSearch(''); setTipo('Todas'); setDisp('Todas');
    setColor(''); setPriceMax(maxPrice);
  };
  const hasFilters = search || tipo !== 'Todas' || disp !== 'Todas' || color || priceMax < maxPrice;

  return (
    <div className="cpage">
      {/* ── Header ── */}
      <div className="cpage__header">
        <button className="cpage__back" onClick={() => navigate('/')}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Volver al inicio
        </button>
        <div>
          <h1 className="cpage__title">Catálogo completo</h1>
          <p className="cpage__subtitle">{filtered.length} producto{filtered.length !== 1 ? 's' : ''} encontrado{filtered.length !== 1 ? 's' : ''}</p>
        </div>
      </div>

      <div className="cpage__layout">
        {/* ── Sidebar filtros ── */}
        <aside className={`cpage__sidebar${filtersOpen ? ' is-open' : ''}`}>
          <div className="cpage__sidebar-head">
            <span className="cpage__sidebar-title">Filtros</span>
            {hasFilters && (
              <button className="cpage__clear" onClick={clearFilters}>Limpiar</button>
            )}
          </div>

          {/* Buscar */}
          <div className="cfilter">
            <label className="cfilter__label">Buscar</label>
            <div className="cfilter__search-wrap">
              <svg className="cfilter__search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <input
                className="cfilter__search"
                type="text"
                placeholder="Nombre o categoría…"
                value={search}
                onChange={(e) => setSearch(sanitizeSearch(e.target.value))}
                maxLength={100}
              />
              {search && (
                <button className="cfilter__search-clear" onClick={() => setSearch('')}>×</button>
              )}
            </div>
          </div>

          {/* Tipo */}
          <div className="cfilter">
            <label className="cfilter__label">Tipo</label>
            <div className="cfilter__pills">
              {TIPOS.map((t) => (
                <button
                  key={t}
                  className={`cfilter__pill${tipo === t ? ' is-active' : ''}`}
                  onClick={() => setTipo(t)}
                >{t}</button>
              ))}
            </div>
          </div>

          {/* Precio */}
          <div className="cfilter">
            <label className="cfilter__label">
              Precio máximo
              <span className="cfilter__price-val">${priceMax.toLocaleString()}</span>
            </label>
            <input
              className="cfilter__range"
              type="range"
              min="0"
              max={maxPrice || 100000}
              step="1000"
              value={priceMax}
              onChange={(e) => setPriceMax(Number(e.target.value))}
            />
            <div className="cfilter__range-labels">
              <span>$0</span><span>${(maxPrice || 100000).toLocaleString()}</span>
            </div>
          </div>

          {/* Disponibilidad */}
          <div className="cfilter">
            <label className="cfilter__label">Disponibilidad</label>
            <div className="cfilter__pills cfilter__pills--col">
              {DISPS.map((d) => (
                <button
                  key={d}
                  className={`cfilter__pill${disp === d ? ' is-active' : ''}`}
                  onClick={() => setDisp(d)}
                >{d}</button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div className="cfilter">
            <label className="cfilter__label">Color</label>
            <div className="cfilter__colors">
              {COLORES.map((c) => (
                <button
                  key={c.hex}
                  className={`cfilter__color${color === c.hex ? ' is-active' : ''}`}
                  style={{ background: c.hex }}
                  title={c.label}
                  onClick={() => setColor(color === c.hex ? '' : c.hex)}
                  aria-label={c.label}
                />
              ))}
            </div>
          </div>
        </aside>

        {/* ── Grid productos ── */}
        <div className="cpage__main">
          {/* Toggle filtros móvil */}
          <button className="cpage__filter-toggle" onClick={() => setFiltersOpen((v) => !v)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="6" x2="20" y2="6" /><line x1="8" y1="12" x2="16" y2="12" /><line x1="11" y1="18" x2="13" y2="18" />
            </svg>
            {filtersOpen ? 'Ocultar filtros' : 'Filtros'}
            {hasFilters && <span className="cpage__filter-badge" />}
          </button>

          {loading ? (
            <div className="cpage__loading">
              <div className="cpage__spinner" />
              <p>Cargando productos…</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="cpage__empty">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />
              </svg>
              <p>No se encontraron productos con esos filtros.</p>
              <button className="cpage__clear-btn" onClick={clearFilters}>Limpiar filtros</button>
            </div>
          ) : (
            <div className="cpage__grid">
              {filtered.map((p) => (
                <article
                  key={p.id || p.name}
                  className="cprod"
                  onClick={() => setLightbox(p)}
                >
                  <div className="cprod__media">
                    <span className="cprod__cat" style={{ background: p.catbg, color: p.catcolor }}>{p.cat}</span>
                    <span className="cprod__status" style={{ background: p.sbg, color: p.scolor }}>
                      <span className="cprod__status-dot" style={{ background: p.scolor }} />
                      {p.status}
                    </span>
                    <img
                      className="cprod__img"
                      src={p.image_url || 'assets/sock.png'}
                      alt={p.name}
                      style={p.filter && p.filter !== 'none' ? { filter: p.filter } : undefined}
                    />
                    <span className="cprod__zoom">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
                      </svg>
                    </span>
                  </div>
                  <div className="cprod__body">
                    <div className="cprod__row">
                      <h3 className="cprod__name">{p.name}</h3>
                      <span className="cprod__price">{p.price}</span>
                    </div>
                    <p className="cprod__desc">{p.desc}</p>
                    <div className="cprod__foot">
                      <div className="cprod__colors">
                        {(p.colors || '').split(',').map((hex) => (
                          <span key={hex} className="cprod__dot" style={{ background: hex.trim() }} />
                        ))}
                      </div>
                      <span className="cprod__units"><b>{p.units}</b> uds.</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {lightbox && <ImageLightbox product={lightbox} onClose={() => setLightbox(null)} />}
    </div>
  );
}
