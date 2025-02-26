import { Product } from '@/domain/types/product'
import { makeProductService } from '@/services/product/factory'
import { useMutation } from '@tanstack/react-query'

const productService = makeProductService()

export const useCreateProduct = () => {
  return useMutation({
    mutationKey: ['createProduct'],
    mutationFn: (product: Product, signal?: AbortSignal) =>
      productService.createProduct(product, signal),
  })
}
