import './ProductCard.css';

/**
 * Tarjeta de producto del catálogo. Los colores de los badges, el filtro de la
 * imagen y los puntos de colorway se aplican desde el hook `useLandingEffects`
 * leyendo los `data-*`, ya que dependen de cada producto.
 */
export default function ProductCard({ product: p }) {
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
      <div className="product__media">
        <span className="product__cat" data-catbadge>{p.cat}</span>
        <span className="product__status" data-statusbadge>
          <span className="product__status-dot" data-statusdot />{p.status}
        </span>
        <img className="product__img" data-pimg src="assets/sock.png" alt={p.name} />
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
