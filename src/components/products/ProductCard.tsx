import { useIsPresent } from 'motion/react';
import ProductTypeBadge from './ProductTypeBadge';
import type { ProductListing } from './types';

interface Props {
  product: ProductListing;
  typeLabel: string;
  detailsLabel: string;
}

export default function ProductCard({ product, typeLabel, detailsLabel }: Props) {
  const isPresent = useIsPresent();
  const titleId = `product-${product.slug}`;

  return (
    <article className="product-card" aria-labelledby={titleId} inert={!isPresent}>
      <img className="product-card__icon" src={product.icon} alt="" width="64" height="64" loading="lazy" />
      <ProductTypeBadge label={typeLabel} />
      <h3 className="product-card__name" id={titleId}>{product.name}</h3>
      <p className="product-card__headline">{product.headline}</p>
      <div className="product-card__description">
        <p className="product-card__desktop-copy">{product.description}</p>
        <p className="product-card__compact-copy">{product.compactDescription}</p>
      </div>
      <p className="product-card__platforms">{product.platforms.join(' · ')}</p>
      <p className="product-card__status">{product.status}</p>
      <div className="product-card__footer">
        <p className="product-card__category">{product.category}</p>
        <p className="product-card__compact-status">{product.status}</p>
        <a className="btn btn--secondary" href={product.href} data-curtain>
          {detailsLabel}<span className="visually-hidden"> · {product.name}</span>
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  );
}
