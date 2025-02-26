import { makeProductService } from '@/factories/product-factory'
import { useQuery } from '@tanstack/react-query'
import { PRODUCTS_QUERY_KEY } from './constants'

const productService = makeProductService()

export const useLoadProductsCategories = () => {
  return useQuery<string[]>({
    queryKey: PRODUCTS_QUERY_KEY.categories,
    queryFn: ({ signal }) => productService.getProductsCategories(signal),
  })
}
