import { Product, ProductFilters } from '@/domain/types/product'
import { makeProductService } from '@/factories/product-factory'
import { LoadProductsQueryParams } from '@/services/product'
import { useQuery } from '@tanstack/react-query'
import { PRODUCTS_QUERY_KEY } from './constants'

const productService = makeProductService()

export type ProductQueryParams = ProductFilters & LoadProductsQueryParams

export const useLoadProducts = (params: ProductQueryParams) => {
  return useQuery<Product[]>({
    queryKey: PRODUCTS_QUERY_KEY.filtered(params),
    queryFn: ({ signal }) => productService.getProducts(params, signal),
    enabled: params.limit !== 0,
  })
}
