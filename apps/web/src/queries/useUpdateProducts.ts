import { Product } from '@/domain/types/product'
import { makeProductService } from '@/services/product/factory'
import { useMutation } from '@tanstack/react-query'

const productService = makeProductService()

export const useUpdateProduct = () => {
  return useMutation({
    mutationKey: ['updateProduct'],
    mutationFn: (product: Product, signal?: AbortSignal) =>
      productService.updateProduct(product, signal),
  })
}
