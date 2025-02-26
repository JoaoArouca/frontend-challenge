import { makeProductService } from '@/services/product/factory'
import { useQuery } from '@tanstack/react-query'
import { PRODUCTS_QUERY_KEY } from './constants'
type UseLoadProductByIdProps = {
  id: number
}

const productService = makeProductService()

export const useLoadProductById = ({ id }: UseLoadProductByIdProps) => {
  return useQuery({
    queryKey: PRODUCTS_QUERY_KEY.id(id),
    queryFn: () => productService.getProductById(id),
    enabled: !!id,
  })
}
