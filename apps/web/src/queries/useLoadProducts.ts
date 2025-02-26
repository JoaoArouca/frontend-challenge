import { Product } from '@/domain/types/product'
import { makeProductService } from '@/factories/product-factory'
import { useQuery } from '@tanstack/react-query'

const productService = makeProductService()

const PRODUCTS_QUERY_KEY = {
  all: ['products'],
  filtered: (params: LoadProductsQueryParams) =>
    [...PRODUCTS_QUERY_KEY.all, params] as const,
}

export type LoadProductsQueryParams = {
  limit?: number
}

export const useLoadProducts = (params: LoadProductsQueryParams) => {
  return useQuery<Product[]>({
    queryKey: PRODUCTS_QUERY_KEY.filtered(params),
    queryFn: ({ signal }) => productService.getProducts(params, signal),
  })
}
