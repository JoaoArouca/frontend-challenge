import { Product } from '@/domain/types/product'
import { makeProductService } from '@/services/product/factory'
import { useMutation } from '@tanstack/react-query'

const productService = makeProductService()

export const useDeleteProduct = () => {
  return useMutation({
    mutationKey: ['deleteProduct'],
    mutationFn: (product: Product) => productService.deleteProduct(product),
  })
}
