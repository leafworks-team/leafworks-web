import type { ProductType } from '../../data/product-types';

/** Only localized listing data crosses the Astro → React boundary. */
export interface ProductListing {
  slug: string;
  name: string;
  productType: ProductType;
  icon: string;
  headline: string;
  description: string;
  compactDescription: string;
  category: string;
  platforms: string[];
  status: string;
  href: string;
}

export type ProductFilter = 'all' | ProductType;

export interface CatalogLabels {
  all: string;
  types: Record<ProductType, string>;
  filters: string;
  details: string;
  results: string;
  empty: string;
}
