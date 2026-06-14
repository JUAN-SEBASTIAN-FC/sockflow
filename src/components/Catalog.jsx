import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Catalog.css';
import { useProducts } from '../context/ProductsContext';
import ProductCard from './ProductCard';
import ImageLightbox from './ImageLightbox';

export default function Catalog() {
  const [lightboxProduct, setLightboxProduct] = useState(null);
  const navigate = useNavigate();
  const { products, loading } = useProducts();

  const preview = products.slice(0, 4);

  return (
    <section id="catalogo" className="catalog">
      <div className="catalog__glow" />
      <div className="catalog__inner">

        <div className="catalog__head" data-reveal>
          <span className="catalog__eyebrow">Catálogo</span>
          <h2 className="catalog__title">Nuestras <span className="catalog__title-accent">medias</span></h2>
          <p className="catalog__lead">Explora nuestros modelos. Haz tu pedido por WhatsApp o Instagram.</p>
        </div>

        {loading ? (
          <div className="catalog__loading">
            <div className="catalog__spinner" />
          </div>
        ) : (
          <div className="catalog__grid catalog__grid--preview">
            {preview.map((p) => (
              <ProductCard
                key={p.id || p.name}
                product={p}
                onImageClick={setLightboxProduct}
              />
            ))}
          </div>
        )}

        <div className="catalog__more" data-reveal>
          <button className="catalog__more-btn" onClick={() => navigate('/catalogo')}>
            <span className="catalog__more-shimmer" />
            <span className="catalog__more-label">
              Ver todos los productos
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          </button>
          <p className="catalog__more-hint">{products.length} productos disponibles</p>
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
