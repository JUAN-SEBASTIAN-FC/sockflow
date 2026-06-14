import { useRef } from 'react';
import './ProductCard.css';

export default function ProductCard({ product: p, onImageClick }) {
  const cardRef = useRef(null);
  const glareRef = useRef(null);
  const imgRef = useRef(null);

  const statusDotColor = p.scolor === '#DC2626' ? '#EF4444'
    : p.scolor === '#B45309' ? '#F59E0B'
    : '#10B981';

  const colors = (p.colors || '').split(',').filter(Boolean);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -9;
    const ry = (px - 0.5) * 11;
    card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-8px)`;
    card.style.boxShadow = '0 26px 50px -16px rgba(37,99,235,.34)';
    card.style.borderColor = 'rgba(96,165,250,.55)';
    if (imgRef.current) imgRef.current.style.transform = 'scale(1.08)';
    if (glareRef.current) glareRef.current.style.background = `radial-gradient(circle at ${px * 100}% ${py * 100}%, rgba(255,255,255,.5), transparent 55%)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'translateY(0)';
    card.style.boxShadow = 'var(--shadow-md)';
    card.style.borderColor = '#DCE9F7';
    if (imgRef.current) imgRef.current.style.transform = 'scale(1.0)';
    if (glareRef.current) glareRef.current.style.background = 'transparent';
  };

  return (
    <article
      ref={cardRef}
      className="product product--visible"
      data-product
      data-reveal
      data-slug={p.slug}
      data-delay={p.delay}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={glareRef} className="product__glare" />

      <div className="product__media" onClick={() => onImageClick?.(p)}>
        <span
          className="product__cat"
          style={{ background: p.catbg, color: p.catcolor }}
        >{p.cat}</span>
        <span
          className="product__status"
          style={{ background: p.sbg, color: p.scolor }}
        >
          <span className="product__status-dot" style={{ background: statusDotColor }} />
          {p.status}
        </span>
        <img
          ref={imgRef}
          className="product__img"
          src={p.image_url || 'assets/sock.png'}
          alt={p.name}
          style={p.filter && p.filter !== 'none' ? { filter: p.filter } : undefined}
        />
        <span className="product__zoom-hint">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3M11 8v6M8 11h6" />
          </svg>
        </span>
      </div>

      <div className="product__body">
        <div className="product__row">
          <h3 className="product__name">{p.name}</h3>
          <span className="product__price">{p.price}</span>
        </div>
        <p className="product__desc">{p.desc}</p>
        <div className="product__foot">
          <div className="product__dots">
            {colors.map((hex) => (
              <span
                key={hex}
                style={{
                  width: 13, height: 13, borderRadius: '50%',
                  background: hex.trim(),
                  boxShadow: `0 0 0 1.5px #fff, 0 0 0 2.5px ${hex.trim()}33`,
                  display: 'inline-block',
                }}
              />
            ))}
          </div>
          <span className="product__units"><b>{p.units}</b> uds.</span>
        </div>
      </div>
    </article>
  );
}
