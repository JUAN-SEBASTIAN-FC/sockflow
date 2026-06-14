import './ProductCard.css';

export default function ProductCard({ product: p, onImageClick }) {
  return (
    <article
      className="product"
      data-product
      data-tilt
      data-reveal
      data-slug={p.slug}
      data-filter-css={p.filter}
      data-colors={p.colors}
      data-scolor={p.scolor}
      data-sbg={p.sbg}
      data-catbg={p.catbg}
      data-catcolor={p.catcolor}
      data-delay={p.delay}
    >
      <div className="product__glare" data-glare />

      <div className="product__media" onClick={() => onImageClick?.(p)}>
        <span className="product__cat" data-catbadge>{p.cat}</span>
        <span className="product__status" data-statusbadge>
          <span className="product__status-dot" data-statusdot />{p.status}
        </span>
        <img className="product__img" data-pimg src={p.image_url || 'assets/sock.png'} alt={p.name} />
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
          <div className="product__dots" data-dots />
          <span className="product__units"><b data-units>{p.units}</b> uds.</span>
        </div>
      </div>
    </article>
  );
}
