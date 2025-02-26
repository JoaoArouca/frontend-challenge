import { LoadProductsQueryParams } from './useLoadProducts'

export const PRODUCTS_QUERY_KEY = {
  all: ['products'] as const,
  categories: ['products-categories'] as const,
  filtered: (params: LoadProductsQueryParams) =>
    [...PRODUCTS_QUERY_KEY.all, params] as const,
}
