import './Catalog.css';
import products from '../data/products';
import ProductCard from './ProductCard';

const filters = [
  { value: 'all', label: 'Todas' },
  { value: 'deportiva', label: 'Deportiva' },
  { value: 'casual', label: 'Casual' },
  { value: 'ejecutiva', label: 'Ejecutiva' },
  { value: 'termica', label: 'Térmica' },
];

export default function Catalog() {
  return (
    <section id="catalogo" className="catalog">
      <div className="catalog__glow" />
      <div className="catalog__inner">
        <div className="catalog__head" data-reveal>
          <span className="catalog__eyebrow">Catálogo</span>
          <h2 className="catalog__title">Una galería de <span className="catalog__title-accent">medias premium</span></h2>
          <p className="catalog__lead">Cada modelo, con su stock vinculado en tiempo real. Filtra por tipo de uso y explora la colección.</p>
        </div>

        <div className="catalog__filters" data-reveal>
          {filters.map((f, i) => (
            <button
              key={f.value}
              className={`catalog__tab${i === 0 ? ' catalog__tab--active' : ''}`}
              data-filter={f.value}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="catalog__grid">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
