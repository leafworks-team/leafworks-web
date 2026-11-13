import { motion } from 'motion/react';
import type { ProductFilter } from './types';

export interface FilterOption {
  value: ProductFilter;
  label: string;
  count: number;
}

interface Props {
  options: FilterOption[];
  selected: ProductFilter;
  onChange: (value: ProductFilter) => void;
  label: string;
  controls: string;
  ready: boolean;
  reducedMotion: boolean;
}

export default function ProductFilters({ options, selected, onChange, label, controls, ready, reducedMotion }: Props) {
  return (
    <div className="product-filters" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className="product-filter"
          aria-pressed={selected === option.value}
          aria-controls={controls}
          disabled={!ready}
          onClick={() => onChange(option.value)}
        >
          {selected === option.value && (
            <motion.span
              className="product-filter__selection"
              layoutId={reducedMotion ? undefined : 'product-filter-selection'}
              transition={{ type: 'spring', bounce: 0.1, duration: 0.3 }}
              aria-hidden="true"
            />
          )}
          <span className="product-filter__label">{option.label}</span>
          <span className="product-filter__count">{option.count}</span>
        </button>
      ))}
    </div>
  );
}
