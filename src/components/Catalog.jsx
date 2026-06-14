import { useState } from 'react';
import './Catalog.css';
import products from '../data/products';
import ProductCard from './ProductCard';
import ImageLightbox from './ImageLightbox';

const filters = [
  { value: 'all',       label: 'Todas' },
  { value: 'deportiva', label: 'Deportiva' },
  { value: 'casual',    label: 'Casual' },
  { value: 'ejecutiva', label: 'Ejecutiva' },
  { value: 'termica',   label: 'Térmica' },
];

export default function Catalog() {
  const [lightboxProduct, setLightboxProduct] = useState(null);

  return (
    <section id="catalogo" className="catalog">
      <div className="catalog__glow" />
      <div className="catalog__inner">

        <div className="catalog__head" data-reveal>
          <span className="catalog__eyebrow">Catálogo</span>
          <h2 className="catalog__title">Nuestras <span className="catalog__title-accent">medias</span></h2>
          <p className="catalog__lead">Explora nuestros modelos y filtra por tipo de uso. Haz tu pedido por WhatsApp o Instagram.</p>
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
            <ProductCard
              key={p.name}
              product={p}
              onImageClick={setLightboxProduct}
            />
          ))}
        </div>
      </div>

      {lightboxProduct && (
        <ImageLightbox
          product={lightboxProduct}
          onClose={() => setLightboxProduct(null)}
        />
      )}
    </section>
  );
}
