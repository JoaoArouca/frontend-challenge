import { ProductCategory } from '@/domain/enum/product'
import { Product } from '@/domain/types/product'
import { makeProductService } from '@/factories/product-factory'
import { useQuery } from '@tanstack/react-query'
import { PRODUCTS_QUERY_KEY } from './constants'

const productService = makeProductService()

export type LoadProductsQueryParams = {
  limit?: number
  sort?: 'asc' | 'desc'
  categories: ProductCategory[]
}

export const useLoadProducts = (params: LoadProductsQueryParams) => {
  return useQuery<Product[]>({
    queryKey: PRODUCTS_QUERY_KEY.filtered(params),
    queryFn: ({ signal }) => productService.getProducts(params, signal),
    enabled: params.limit !== 0,
  })
}
