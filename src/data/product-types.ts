/** Product purpose is independent of where it runs (macOS, Windows, Web…). */
export const PRODUCT_TYPES = ['apps', 'tools'] as const;
export type ProductType = (typeof PRODUCT_TYPES)[number];
