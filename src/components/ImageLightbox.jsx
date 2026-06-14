import { useEffect } from 'react';
import './ImageLightbox.css';

export default function ImageLightbox({ product, onClose }) {
  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className="lightbox" onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="lightbox__inner">

        <button className="lightbox__close" onClick={onClose} aria-label="Cerrar">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="lightbox__img-wrap" style={{ background: `radial-gradient(120% 100% at 50% 20%, #eff6ff, #dce9f7 65%, #e7e3fb)` }}>
          <img
            className="lightbox__img"
            src="assets/sock.png"
            alt={product.name}
            style={product.filter && product.filter !== 'none' ? { filter: product.filter } : undefined}
          />
        </div>

        <div className="lightbox__info">
          <span className="lightbox__name">{product.name}</span>
          <div className="lightbox__meta">
            <span className="lightbox__cat" style={{ background: product.catbg, color: product.catcolor }}>
              {product.cat}
            </span>
            <span className="lightbox__price">{product.price}</span>
          </div>
        </div>

        <span className="lightbox__hint">Presiona Esc o haz clic fuera para cerrar</span>
      </div>
    </div>
  );
}
