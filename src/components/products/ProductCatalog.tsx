import { AnimatePresence, LayoutGroup, MotionConfig, motion, useReducedMotion } from 'motion/react';
import { useEffect, useId, useState } from 'react';
import { PRODUCT_TYPES } from '../../data/product-types';
import ProductCard from './ProductCard';
import ProductFilters, { type FilterOption } from './ProductFilters';
import type { CatalogLabels, ProductFilter, ProductListing } from './types';
import './products.css';

interface Props {
  products: ProductListing[];
  labels: CatalogLabels;
}

export default function ProductCatalog({ products, labels }: Props) {
  const [selected, setSelected] = useState<ProductFilter>('all');
  const [ready, setReady] = useState(false);
  const reducedMotion = useReducedMotion() ?? false;
  const id = useId();
  const gridId = `${id}-products`;
  useEffect(() => setReady(true), []);

  const options: FilterOption[] = [
    { value: 'all', label: labels.all, count: products.length },
    ...PRODUCT_TYPES.map((value) => ({
      value,
      label: labels.types[value],
      count: products.filter((product) => product.productType === value).length,
    })).filter((option) => option.count > 0),
  ];
  const visible = products.filter((product) => selected === 'all' || product.productType === selected);
  const selectedLabel = options.find((option) => option.value === selected)?.label ?? labels.all;

  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup id={id}>
        <div className="product-catalog">
          <ProductFilters
            options={options}
            selected={selected}
            onChange={setSelected}
            label={labels.filters}
            controls={gridId}
            ready={ready}
            reducedMotion={reducedMotion}
          />
          <p className="visually-hidden" role="status" aria-atomic="true">
            {labels.results.replace('{category}', selectedLabel).replace('{count}', String(visible.length))}
          </p>
          <ul className="product-grid" id={gridId}>
            <AnimatePresence initial={false} mode="popLayout">
              {visible.map((product) => (
                <motion.li
                  key={product.slug}
                  className="product-grid__item"
                  layout={reducedMotion ? false : 'position'}
                  initial={{ opacity: 0, y: reducedMotion ? 0 : 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reducedMotion ? 0 : 0.2 }}
                >
                  <ProductCard product={product} typeLabel={labels.types[product.productType]} detailsLabel={labels.details} />
                </motion.li>
              ))}
            </AnimatePresence>
          </ul>
          {visible.length === 0 && <p className="product-catalog__empty">{labels.empty}</p>}
        </div>
      </LayoutGroup>
    </MotionConfig>
  );
}
