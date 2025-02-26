import { ProductQueryParams } from './useLoadProducts'

export const PRODUCTS_QUERY_KEY = {
  all: ['products'] as const,
  categories: ['products-categories'] as const,
  filtered: (params: ProductQueryParams) =>
    [...PRODUCTS_QUERY_KEY.all, params] as const,
}
